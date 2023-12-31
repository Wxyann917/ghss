let fs = require('fs')
exports.run = {
   usage: ['caklontong'],
   category: 'game',
   async: async (m, {
      client,
      isOwner,
      isPrefix
   }) => {
      client.caklontong = client.caklontong ? client.caklontong : {}
      let id = m.chat,
         timeout = 120000,
         poin = 0
      if (id in client.caklontong) return client.reply(m.chat, 'Pertanyaan ini belum dijawab!', client.caklontong[id][0])
      let _caklontong = JSON.parse(fs.readFileSync('./media/caklontong.json'))
      let json = _caklontong[Math.floor(Math.random() * _caklontong.length)]
      let teks = `*CAKLONTONG GAME*\n\n${json.soal}\n\n`
      teks += `Waktu habis: *${((timeout / 1000) / 60)}* menit\n`
      teks += `Balas pesan ini untuk menjawab pertanyaan, ketik *${isPrefix}cluedong* untuk bantuan`
      client.caklontong[id] = [
         await client.reply(m.chat, teks, m),
         json, poin,
         setTimeout(() => {
            if (client.caklontong[id]) client.reply(m.chat, `*Waktunya habis!*\nJawabannya adalah : *${json.jawaban}*\nDeskripsi : *${json.deskripsi}*`, client.caklontong[id][0])
            delete client.caklontong[id]
         }, timeout)
      ]
   },
   group: true,
   error: false,
   cache: true
}