const handler = async (m, {conn, text, command}) => {
  const yh = global.bermuda;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🔮 BERMUDA 🔮*'}, {quoted: m});
};
handler.command = ['Bermuda']
handler.tags = ['internet'];
handler.help = ['mapa'];
export default handler;

global.bermuda = [
  'https://telegra.ph/file/78c4c035fdb1995789237.jpg',
];
