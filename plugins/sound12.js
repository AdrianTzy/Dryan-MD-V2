import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
await conn.sendMessage(m.chat, {
          react: {
            text: '⏳',
            key: m.key,
          }})
    let info = fs.readFileSync('./mp3/sound12.m4a')

let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

conn.reply(m.chat, info, m, {},{ contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow",
    mediaType: 2,
    description: "https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow", 
    title: 'whmods-ᴍᴜʟᴛɪᴅᴇᴠɪᴄᴇ',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sig  }}})
}
handler.command = ['sound12']
handler.help = ['sound12']

export default handler