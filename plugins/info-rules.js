let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/76c9636fa4b111ed28064.jpg'
let text = `\n┏━━ꕥ *[ Rules ]* ꕥ━━━⬣\n┃\n┃1. Spam DryanBOT\n┃    _Sanksi : Peringatan/Blockir_\n┃\n┃2. Telepon/VidCall Bot\n┃   _Sanksi : Blockir_\n┃\n┃3. Memasukan Nomor Bot Ke Grup\n┃    Tanpa Izin\n┃   _Sanksi : Peringatan_\n┃\n┗━━ꕥ *[ DryanBOT ]* ꕥ━⬣
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'NOMOR DEVELOP', url: `https://wa.me/6289513081052`}},
    {index: 4, quickReplyButton: {displayText: 'Donasi', id: '.donasi'}},
]
let tm = {
text: text,
footer: global.wm3,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['rules']
handler.tags = ['rules']
handler.command = /^(rules)$/i

export default handler