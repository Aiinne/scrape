let fetch = require('node-fetch')
let winScore = 500
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }
let src = JSON.parse(fs.readFileSync(`./src/abc_lima_dasar.json`))
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
*Soal:* ${json.soal}
Terdapat *${json.huruf.length}* jawaban${json.huruf.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} XP tiap huruf benar
    `.trim()
this.game[id] = {
        id,
        msg: await m.reply(caption),
        ...json,
        terjawab: Array.from(json.huruf, () => false),
        winScore,
    }
}
handler.help = ['abclimadasar']
handler.tags = ['game']
handler.command = /^abclimadasar$/i
handler.limit = true

module.exports = handler
