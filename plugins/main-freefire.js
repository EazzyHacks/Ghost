import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━•💌 *Gx Store Vip* 💌•━━━━┓
┃╭─────────♡─────────╮
┃┊•🔮¡𝙃𝙊𝙇𝘼! @${m.sender.split`@`[0]}
┃╰─────────♡─────────╯
┃┊•🔮𝘾𝙍𝙀𝘼𝘿𝙊𝙍
┃┊•🔮 wa.me/51936994155
┃┊•🔮𝙑𝙀𝙍𝙎𝙄𝙊𝙉 𝘿𝙀𝙇 𝘽𝙊𝙏: 𝟹.𝟸.𝟷
┃┊•🔮𝙁𝙀𝘾𝙃𝘼: ${date}
┃┊•🔮𝙏𝙄𝙀𝙈𝙋𝙊 𝘼𝘾𝙏: ${uptime}                                            
┗━━━━━━━━•◦ 🤖 ◦•━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🚀 𝙁𝙍𝙀𝙀 𝙁𝙄𝙍𝙀 🚀 」
┃╭───────⧟⭑⧟───────•
┃┊🗼.𝘉𝘦𝘳𝘮𝘶𝘥𝘢
┃┊🏜️.𝘒𝘢𝘭𝘢𝘩𝘢𝘳𝘪
┃┊🏞️.𝘈𝘭𝘱𝘦𝘴
┃┊🏝️.𝘗𝘶𝘳𝘨𝘢𝘵𝘰𝘳𝘪𝘰
┃┊🏗️.𝘕𝘦𝘹𝘵𝘦𝘳𝘳𝘢
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🧾 𝙍𝙀𝙂𝙇𝘼𝙎 🧾 」
┃╭───────⧟⭑⧟───────•
┃┊🧾.apostado ( sur )
┃┊🧾.by ( sur )
┃┊🧾.infinito ( sur )
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 💻 𝘽𝙐𝙎𝘾𝘼𝙍 𝙑𝙎 💻 」
┃╭───────⧟⭑⧟───────
┃┊💻.𝘉𝘴𝘮𝘢𝘴𝘤
┃┊💻.𝘉𝘴𝘧𝘦𝘮
┃┊💻.𝘉𝘴𝘮𝘪𝘹𝘵𝘰 
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🧝🏼‍♀️ 𝙇𝙄𝙎𝙏𝘼𝙎 𝙁𝙀𝙈 🧝🏼‍♀️ 」
┃╭───────⧟⭑⧟───────•
┃┊🧝🏼‍♀️.Fem4 *( Lista De 4vs4 Fem Apostado )*
┃┊🧝🏼‍♀️.Fem5 *( Lista De 4vs4 Fem Infinito )*
┃┊🧝🏼‍♀️.Fem6 *( Lista De 6vs6 Fem By )*
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🧝🏼 𝙇𝙄𝙎𝙏𝘼𝙎 𝙈𝘼𝙎𝘾 🧝🏼 」
┃╭───────⧟⭑⧟───────•
┃┊🧝🏼‍♀️.Masc4 *( Lista De 4vs4 Masc Apostado )*
┃┊🧝🏼‍♀️.Masc5 *( Lista De 4vs4 Masc Infinito )*
┃┊🧝🏼‍♀️.Masc6 *( Lista De 6vs6 Masc By )*
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🧝🏼 𝙇𝙄𝙎𝙏𝘼𝙎 MIXTO 🧝🏼 」
┃╭───────⧟⭑⧟───────•
┃┊🧝🏼‍♀️.MIxto4 *( Lista De 4vs4 Mixto Apostado )*
┃┊🧝🏼‍♀️.Mixto5 *( Lista De 4vs4 Mixto Infinito )*
┃┊🧝🏼‍♀️.Mixto6 *( Lista De 6vs6 Mixto By )*
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━━━━━━┓
┃「 🌀 𝙇𝙄𝙉𝙆𝙎/𝘼𝙋𝙆𝙎 🌀 」
┃╭───────⧟⭑⧟───────•
┃┊🌀.𝘚𝘱𝘢𝘮𝘈𝘱𝘬 /𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱
┃┊🌀.𝘚𝘱𝘢𝘮𝘊𝘰𝘮𝘶 /𝘊𝘰𝘮𝘶́𝘯
┃┊🌀.𝘚𝘱𝘢𝘮2
┃┊🌀.𝘙𝘤𝘶𝘳𝘴𝘰𝘴𝘥𝘻𝘯
┃┊🌀.𝘋𝘳𝘪𝘷𝘦𝘴 𝘥𝘻𝘯
┃┊🌀.𝘥𝘻𝘯
┃┊🌀.𝘈𝘱𝘬𝘦𝘥𝘪𝘵𝘴
┃┊🌀.𝘋𝘳𝘪𝘷𝘦𝘦𝘥𝘪𝘵𝘴
┃╰───────⧟⭑⧟───────•
┗━━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '🔮 𝙀𝙡 𝙢𝙚𝙣𝙪 𝙩𝙞𝙚𝙣𝙚 𝙪𝙣 𝙚𝙧𝙧𝙤𝙧 𝙮 𝙣𝙤 𝙛𝙪𝙚 𝙥𝙤𝙨𝙞𝙗𝙡𝙚 𝙚𝙣𝙫𝙞𝙖𝙧𝙡𝙤 𝙥𝙤𝙧 𝙛𝙖𝙫𝙤𝙧 𝙧𝙚𝙥𝙤𝙧𝙩𝙚𝙡𝙤 𝙖𝙡 𝙘𝙧𝙚𝙖𝙙𝙤𝙧 𝙘𝙤𝙣 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤\n\n.𝘳𝘦𝘱𝘰𝘳𝘵𝘦 <𝘵𝘦𝘹𝘵𝘰>', m);
  }
};
handler.command = /^(Menuff|menuff|comandosff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
