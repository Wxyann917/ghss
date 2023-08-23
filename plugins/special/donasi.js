exports.run = {
   usage: ['donasi'],
   category: 'special',
   async: async (m, {
      client
   }) => {
            var pesan_donasi = `Dengan donasi kamu bisa mendapatkan premium secara cuma cuma berapapun donasinya, (minimal 3K)!

Metode pembayaran? 085771647181 (Gopay)

Terimakasih, berkat berkah dari mu membuat owner semakin bersemangat untuk mengerjakan bot ini.

~ Owner`
   client.sendMessageModify(m.chat, pesan_donasi, m, {
   title: global.botname,
   ads: false,
   largeThumb: true,
   thumbnail: await Func.fetchBuffer(global.db.setting.cover),
   url: global.db.setting.link
})
   },
   error: false
}