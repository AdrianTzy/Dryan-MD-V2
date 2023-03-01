import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/76c9636fa4b111ed28064.jpg`
    return conn.sendButton(m.chat, '┌─「 Donasi • Pulsa 」\n│ • *Tri:* +62 895-1308-1052\n❏────', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/adrianpreset03_",
                mediaType: "VIDEO",
                title: 'Donasi To DryanBOT ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler