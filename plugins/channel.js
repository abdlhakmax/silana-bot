let handler = async (m, { conn }) => {

m.reply(`*قناتي على الواتساب:*\n

https://whatsapp.com/channel/0029Vaebz0Z8vd1KDGAz0u3J
*تابعني هناك♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
