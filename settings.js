// ╭─────────────────────⊷
// │ 𖥔 MaycolAIUltraMD - Configuración
// │ Tematizado al estilo Hanako-Kun (◍•ᴗ•◍)❤
// Hecho por SoyMaycol - NO QUITAR CREDITOS NI EL MISMO SOYMAYCOL
// ╰─────────────────────⊷

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

// ╭── ✦ Número de Bot ✦ ──⊷
global.botNumber = '' // Ejemplo: 51921826291

// ╭── ✦ Propietario y Staff ✦ ──⊷
global.owner = ['51936994155', '51936994155']
global.mods = []
global.suittag = []
global.prems = []
global.creador = '51936994155'
global.namechannel = 'Ghost Mode <𝟑 • Actualizaciones'
global.namechannel2 = 'Ghost Mode <𝟑 • Actualizaciones'
global.namegrupo = 'Ghost Mode <𝟑 • Actualizaciones'
global.namecomu = 'Ghost Mode <𝟑 • Actualizaciones'
global.apodo = 'Ghost Mode <𝟹'
global.repo = 'Ghost/Mode'
global.pais = '⊹˚• Perú •˚⊹'
global.github = 'Ghost'

// ╭── ✦ Información del Bot ✦ ──⊷
global.libreria = 'MayBailyes'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.nameqr = 'Evolution'
global.namebotttt = 'GhostBodMd'
global.namebot = 'GhostBot'
global.personaje = 'Ghost Bot'
global.sessions = './Ghost/Principal'
global.jadi = 'Bots'
global.yukiJadibts = true

// ╭── ✦ Personalización Visual ✦ ──⊷
global.packname = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲'
global.botname = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲'
global.wm = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲'
global.author = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 <3'
global.dev = global.author
global.textbot = '𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 <3'
global.etiqueta = '@evolution.hack'
global.listo = 'Aca lo tienes ୧⁠(⁠＾⁠ ⁠〰⁠ ⁠＾⁠)⁠୨'
global.rwait = '🕒'
global.done = '🇯🇵'
global.error = '🈲'
global.msm = '⚠︎'
global.emoji = '🇯🇵'
global.emoji2 = '💕'
global.emoji3 = '😍'
global.emoji4 = '🥴'
global.emoji5 = '👻'
global.wait = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';
global.waitt = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';
global.waittt = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';
global.waitttt = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';
global.yahecho = 'Ya estaba hecho (⁠눈⁠‸⁠눈⁠)';

// ╭── ✦ Configuración General ✦ ──⊷
global.moneda = 'MayCoins'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://files.catbox.moe/z604jy.jpeg'
global.banner2 = 'https://files.catbox.moe/z604jy.jpeg'
global.avatar = 'https://files.catbox.moe/z604jy.jpeg'
global.video = 'https://files.catbox.moe/6ds908.mp4'
global.video2 = [
  'https://files.catbox.moe/6ds908.mp4'
]
global.icono = 'https://files.catbox.moe/z604jy.jpeg'

// ╭── ✦ Enlaces Oficiales ✦ ──⊷
global.gp1 = 'https://chat.whatsapp.com/I4yJ2vrlhGXH3JRg06mxFZ'
global.comunidad1 = 'https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m'
global.channel = global.comunidad1
global.channel2 = global.comunidad1
global.md = 'https://github.com/Ghost/Mode'
global.correo = 'yallico2024@gmail.com'
global.cn = global.comunidad1
global.owner_ngl = 'evolutiondev'
global.canalIdM = ["120363419947391620@newsletter"]
global.canalNombreM = ["𝗚𝗵𝗼𝘀𝘁 𝗕𝗼𝘁 𝗦𝘂𝗽𝗿𝗲𝗺𝗲 <𝟑 • Actualizaciones"]
global.canalLink = ["https://whatsapp.com/channel/0029Vb5oUp43LdQUVViHwc0m"]

// ╭── ✦ Catálogo y Estilo ✦ ──⊷
global.catalogo = fs.readFileSync('./src/catalogo.jpg')
global.estilo = {
  key: { fromMe: false, participant: '0@s.whatsapp.net' },
  message: {
    orderMessage: {
      itemCount: -999999,
      status: 1,
      surface: 1,
      message: global.packname,
      orderTitle: 'Bang',
      thumbnail: global.catalogo,
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

// ╭── ✦ Otros Ajustes ✦ ──⊷
global.ch = {
  ch1: '120363419947391620@newsletter'
}
global.multiplier = 70
global.activeSocket = null
global.comandosEnMantenimiento = global.comandosEnMantenimiento || []

// ╭── ✦ Librerías Globales ✦ ──⊷
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

// ╭── ✦ Recarga Automática ✦ ──⊷
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("⭑ Hanako dice: Se actualizó 'settings.js' ⭑"))
  import(`${file}?update=${Date.now()}`)
})
  
