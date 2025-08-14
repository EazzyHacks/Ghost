// ♥ 𝙼𝚎𝚗𝚞 𝚍𝚎 𝚂𝚘𝚢𝙼𝚊𝚢𝚌𝚘𝚕 ♥
// ᵁˢᵃ ᵉˢᵗᵉ ᶜᵒᵈⁱᵍᵒ ˢⁱᵉᵐᵖʳᵉ ᶜᵒⁿ ᶜʳᵉᵈⁱᵗᵒˢ

let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid?.[0] || m.sender
  let user = global.db.data.users[userId]
  let name = conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length

  // Saludo decorado
  let hour = new Intl.DateTimeFormat('es-PE', {
  hour: 'numeric',
  hour12: false,
  timeZone: 'America/Lima'
}).format(new Date())
  
  let saludo = hour < 6 ? "🌌 Buenas madrugadas, espíritu insomne..." :
               hour < 12 ? "🌅 Buenos días, alma luminosa~" :
               hour < 18 ? "🌄 Buenas tardes, viajero astral~" :
               "🌃 Buenas noches, sombra errante~"

  // MENÚ HANAKO-KUN STYLE CON BOTONES
  let menuText = `
╭───❖ ${global.botname} ❖───╮

 ｡ﾟ☆: *.${name}.* :☆ﾟ｡  
> *_${saludo}_*

╰─────❖ 𝓜𝓮𝓷𝓾 ❖─────╯

✦ 𝙸𝙽𝙵𝙾 𝙳𝙴 𝚂𝚄𝙼𝙾𝙽 ✦

💻 Sistema: Multi-Device
👤 Espíritu: @${userId.split('@')[0]}
⏰ Tiempo activo: ${uptime}
👥 Espíritus: ${totalreg} Espiritus
⌚ Hora: ${hour}

> Hecho con amor por: *_${global.apodo}_* y *_@evolution.hack <3_* (⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤

≪──── ⋆𓆩✧𓆪⋆ ────≫

*Selecciona una opción:*
`.trim()

  // Crear botones interactivos
  let buttons = [
    { buttonId: '.menu2', buttonText: { displayText: '♥ Menu Free Fire ♥' }, type: 1 },
    { buttonId: '.staff', buttonText: { displayText: '♦ Staff ♦' }, type: 1 },
    { buttonId: '.menucompleto', buttonText: { displayText: '♣ Menu Completo ♣' }, type: 1 }
  ]

  let buttonMessage = {
    text: menuText,
    buttons: buttons,
    headerType: 1,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.canalIdM,
        newsletterName: global.botname,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: "Un amor que nunca se acaba Jeje <3",
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    }
  }

  // Enviar menú con botones y video estilo gif
  await conn.sendMessage(m.chat, {
    video: { url: global.video, gifPlayback: true },
    caption: menuText,
    gifPlayback: true,
    buttons: buttons,
    headerType: 4,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: global.canalIdM,
        newsletterName: global.botname,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: botname,
        body: "Un amor que nunca se acaba Jeje <3",
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help', 'ayuda']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h}h ${m}m ${s}s`
          }
