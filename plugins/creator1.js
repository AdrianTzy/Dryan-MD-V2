import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;DryanBOT\nNICKNAME:👑 Owner DryanBOT\nORG:YT : @dryanbot\nTITLE:soft\nitem1.TEL;waid=6289513081052:+62 895-1308-1052\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/IbewxIjm5Lr6cIvkUPlXwq\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: azzygota24@gmail.com\nitem3.X-ABLabel:💌 Mail Owner DryanBOT\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 24 Maret 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: author, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Kakak Owner Aku `
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['nomor']
handler.tags = ['nomor']

handler.command = /^(nomor)$/i

export default handler