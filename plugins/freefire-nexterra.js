const handler = async (m, {conn, text, command}) => {
  const yh = global.nexterra;
  const url = yh[Math.floor(Math.random() * yh.length)];
  conn.sendMessage(m.chat, {image: {url: url}, caption: '*🔮 NEXTERRA 🔮*'}, {quoted: m});
};
handler.command = ['Nexterra']
handler.tags = ['internet'];
handler.help = ['mapa'];
export default handler;

global.nexterra = [
  'https://telegra.ph/file/46963669930d91d924493.jpg',
];
