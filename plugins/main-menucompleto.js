// 👻 𝙼𝚎𝚗𝚞 𝙳𝚒𝚗𝚊𝚖𝚒𝚌𝚘 𝚍𝚎 𝚂𝚘𝚢𝙼𝚊𝚢𝚌𝚘𝚕 👻
// ᵁˢᵃ ᵉˢᵗᵉ ᶜᵒᵈⁱᵍᵒ ˢⁱᵉᵐᵖʳᵉ ᶜᵒⁿ ᶜʳᵉᵈⁱᵗᵒˢ

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid?.[0] || m.sender
  let user = global.db.data.users[userId]
  let name = conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length

  let hour = new Intl.DateTimeFormat('es-PE', {
    hour: 'numeric',
    hour12: false,
    timeZone: 'America/Lima'
  }).format(new Date())

  let saludos = {
    madrugada: ["🌙 Buenas madrugadas, alma nocturna...", "🌌 La noche abraza tu espíritu...", "✨ En las sombras de la madrugada..."],
    mañana: ["🌅 Buenos días, espíritu radiante~", "☀️ La luz matutina te saluda~", "🌸 Un nuevo amanecer te bendice~"],
    tarde: ["🌄 Buenas tardes, viajero astral~", "🍃 La tarde susurra tu nombre~", "🦋 Entre nubes y sueños tardíos~"],
    noche: ["🌃 Buenas noches, guardián de secretos~", "👻 La noche revela sus misterios~", "🔮 Bajo el velo de la oscuridad~"]
  }

  let periodoSaludo = hour < 6 ? 'madrugada' : hour < 12 ? 'mañana' : hour < 18 ? 'tarde' : 'noche'
  let saludo = saludos[periodoSaludo][Math.floor(Math.random() * saludos[periodoSaludo].length)]

  let estilosMenu = [
    {
      header: `╭═══❖ ${global.botname} ❖═══╮`,
      userSection: `┊ ｡ﾟ☆: *.${name}.* :☆ﾟ｡\n┊ *_${saludo}_*`,
      infoTitle: `╰═══❖ 𝓘𝓷𝓯𝓸 𝓓𝓮𝓵 𝓢𝓾𝓶𝓸𝓷 ❖═══╯`,
      categoryStyle: (tag, cmds, emoji) => `
╭─━━━ ${emoji} ${tag} ${emoji} ━━━╮
${cmds.map(cmd => `┊ ➤ ${cmd}`).join('\n')}
╰─━━━━━━━━━━━━━━━━╯`,
      footer: `⋘ ──── ∗ ⋅◈⋅ ∗ ──── ⋙`
    }
  ]

  let categories = {}
  for (let plugin of Object.values(global.plugins)) {
    if (!plugin.help || !plugin.tags) continue
    for (let tag of plugin.tags) {
      if (!categories[tag]) categories[tag] = []
      categories[tag].push(...plugin.help.map(cmd => `#${cmd}`))
    }
  }

  let emojiSet = ['✨', '🌸', '👻', '⭐', '🔮']
  let emojiRandom = () => emojiSet[Math.floor(Math.random() * emojiSet.length)]

  let mensajesEspera = [
    '⌜ ⊹ Espera tantito, espíritu curioso... ⊹ ⌟',
    '✦ Invocando el menú mágico... ✦',
    '🌸 Preparando algo especial para ti... 🌸',
    '👻 Los espíritus están organizando todo... 👻',
    '✨ Un momento, creando magia... ✨'
  ]

  let estiloSeleccionado = estilosMenu[Math.floor(Math.random() * estilosMenu.length)]

  let menuText = `
${estiloSeleccionado.header}

${estiloSeleccionado.userSection}

${estiloSeleccionado.infoTitle}

💻 Sistema: Multi-Device
👤 Espíritu: @${userId.split('@')[0]}
⏰ Tiempo activo: ${uptime}
👥 Espíritus: ${totalreg} espíritus
⌚ Hora: ${hour}

${estiloSeleccionado.footer}

> Hecho con amor por: *_${global.apodo}_* (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤
`.trim()

  let categoriesEntries = Object.entries(categories)
  categoriesEntries.sort(() => Math.random() - 0.5)

  for (let [tag, cmds] of categoriesEntries) {
    let tagName = tag.toUpperCase().replace(/_/g, ' ')
    let emoji = emojiRandom()
    menuText += estiloSeleccionado.categoryStyle(tagName, cmds, emoji)
  }

  let mensajeEspera = mensajesEspera[Math.floor(Math.random() * mensajesEspera.length)]
  
  await conn.reply(m.chat, mensajeEspera, m, {
    contextInfo: {
      externalAdReply: {
        title: global.botname,
        body: "Un amor que nunca se acaba Jeje <3",
        thumbnailUrl: global.banner2 || 'https://files.catbox.moe/z604jy.jpeg',
        sourceUrl: global.channel || 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m',
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      }
    }
  })

  let videosHanako = Array.isArray(global.video2) ? global.video2 : [global.video2]
  let videoSeleccionado = videosHanako[Math.floor(Math.random() * videosHanako.length)]

  await conn.sendMessage(m.chat, {
    video: { url: videoSeleccionado },
    caption: menuText,
    gifPlayback: true,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.canalIdM?.[0] || '120363419947391620@newsletter',
        newsletterName: global.botname,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: global.botname,
        body: "Un amor que nunca se acaba Jeje <3",
        thumbnailUrl: global.banner2 || 'https://files.catbox.moe/z604jy.jpeg',
        sourceUrl: global.channel || 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m',
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menucompleto']
handler.tags = ['main']
handler.command = ['menucompleto']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h}h ${m}m ${s}s`
    }
