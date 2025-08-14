const handler = async (m, {conn, text, command}) => {
  const yh = global.purgatorio;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🔮 PURGATORIO 🔮*'}, {quoted: m});
};
handler.command = ['Purgatorio']
handler.tags = ['internet'];
handler.help = ['mapa'];
export default handler;

global.purgatorio = [
  'https://telegra.ph/file/906cbccf4259b5395abb5.jpg',
];
