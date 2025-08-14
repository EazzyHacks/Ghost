let partidasVS6 = {};

let handler = async (m, { conn, args }) => {
  // Verificar si se proporcionaron los argumentos necesarios
  if (args.length < 2) {
    conn.reply(m.chat, '_Debes proporcionar la hora (HH:MM) y el rival._', m);
    return;
  }

  // Validar el formato de la hora
  const horaRegex = /^([01]\d|2[0-3]):?([0-5]\d)$/;
  if (!horaRegex.test(args[0])) {
    conn.reply(m.chat, '_Formato de hora incorrecto. Debe ser HH:MM en formato de 26 horas._', m);
    return;
  }

  const horaUsuario = args[0]; // Hora proporcionada por el usuario
  const modalidad = args.slice(1).join(' '); // Modalidad proporcionada por el usuario

  // Calcular la hora adelantada
  const horaUsuarioSplit = horaUsuario.split(':');
  let horaAdelantada = '';
  if (horaUsuarioSplit.length === 2) {
    const horaNumerica = parseInt(horaUsuarioSplit[0], 10);
    const minutoNumerico = parseInt(horaUsuarioSplit[1], 10);
    const horaAdelantadaNumerica = horaNumerica - 2; // Adelantar 1 hora
    horaAdelantada = `${horaAdelantadaNumerica.toString().padStart(2, '0')}:${minutoNumerico.toString().padStart(2, '0')}`;
  }

  let plantilla = `
⏰| 𝑯𝒐𝒓𝒂:  ${horaUsuario}🇦🇷  ${horaAdelantada}🇵🇪
🏯| 𝑴𝒐𝒅𝒐: By Fem
⚔️| 𝑹𝒊𝒗𝒂𝒍: ${modalidad}

╭── ⋆⋅☆⋅⋆ ──┈┈
│˚.⋆🥷🏻 → 
│˚.⋆🥷🏻→ 
│˚.⋆🥷🏻→ 
│˚.⋆🥷🏻→  
│˚.⋆🥷🏻→ 
│˚.⋆🥷🏻→ 
╰─── ⋆⋅☆⋅⋆ ────

╭── ⋆⋅☆⋅⋆ ──┈┈
│˚.⋆🥷🏻→ 
│˚.⋆🥷🏻→  
╰─── ⋆⋅☆⋅⋆ ────

     (𝚁𝚎𝚊𝚌𝚌𝚒𝚘𝚗𝚊 𝚌𝚘𝚗 ❤️ 𝚙𝚊𝚛𝚊 𝚞𝚗𝚒𝚛𝚝𝚎)
  `.trim()

  let msg = await conn.sendMessage(m.chat, { text: plantilla }, { quoted: m })
  partidasVS6[msg.key.id] = {
    chat: m.chat,
    jugadores: [],
    suplentes: [],
    horaUsuario: horaUsuario,
    horaAdelantada: horaAdelantada,
    modalidad: modalidad,
    originalMsg: msg,
  }
}

handler.help = ['Fem6']
handler.tags = ['ffsurr']
handler.command = ['Fem6']
handler.group = true
handler.admin = true

// Función para manejar las reacciones
handler.before = async function (m) {
  if (!m.message?.reactionMessage) return false
  
  let reaction = m.message.reactionMessage
  let key = reaction.key
  let emoji = reaction.text
  let sender = m.key.participant || m.key.remoteJid

  // Solo procesar reacciones de corazón o pulgar arriba
  if (!['❤️', '👍🏻', '❤', '👍'].includes(emoji)) return false
  
  // Verificar si existe la partida
  if (!partidasVS6[key.id]) return false

  let data = partidasVS6[key.id]

  // Verificar si el usuario ya está en la lista
  if (data.jugadores.includes(sender) || data.suplentes.includes(sender)) return false

  // Agregar a jugadores principales o suplentes
  if (data.jugadores.length < 6) {
    data.jugadores.push(sender)
  } else if (data.suplentes.length < 2) {
    data.suplentes.push(sender)
  } else {
    return false // Lista llena
  }

  // Crear las menciones para jugadores y suplentes
  let jugadores = data.jugadores.map(u => `@${u.split('@')[0]}`)
  let suplentes = data.suplentes.map(u => `@${u.split('@')[0]}`)

  let plantilla = `
⏰| 𝑯𝒐𝒓𝒂:  ${data.horaUsuario} 🇦🇷  ${data.horaAdelantada} 🇵🇪
🏯| 𝑴𝒐𝒅𝒐: By Fem
⚔️| 𝑹𝒊𝒗𝒂𝒍:  ${data.modalidad}

╭── ⋆⋅☆⋅⋆ ──┈┈
│˚.⋆🥷🏻→ ${jugadores[0] || ''}
│˚.⋆🥷🏻→ ${jugadores[1] || ''}
│˚.⋆🥷🏻→ ${jugadores[2] || ''}
│˚.⋆🥷🏻→ ${jugadores[3] || ''}
│˚.⋆🥷🏻→ ${jugadores[4] || ''}
│˚.⋆🥷🏻→ ${jugadores[5] || ''}
╰─── ⋆⋅☆⋅⋆ ────

╭── ⋆⋅☆⋅⋆ ──┈┈
│˚.⋆🥷🏻→ ${suplentes[0] || ''}
│˚.⋆🥷🏻→ ${suplentes[1] || ''}
╰─── ⋆⋅☆⋅⋆ ────

${data.jugadores.length < 6 || data.suplentes.length < 2 ? '(𝚁𝚎𝚊𝚌𝚌𝚒𝚘𝚗𝚊 𝚌𝚘𝚗 ❤️ 𝚙𝚊𝚛𝚊 𝚞𝚗𝚒𝚛𝚝𝚎)' : '✅ 𝐋𝐈𝐒𝐓𝐀 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀'}
  `.trim()

  try {
    await this.sendMessage(data.chat, {
      text: plantilla,
      edit: data.originalMsg.key,
      mentions: [...data.jugadores, ...data.suplentes]
    })
  } catch (error) {
    console.error('Error al editar mensaje:', error)
  }

  return false
}

export default handler
