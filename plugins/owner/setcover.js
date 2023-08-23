exports.run = {
   usage: ['setcover'],
   hidden: ['cover'],
//   use: 'reply foto',
  // category: 'owner',
   async: async (m, {
      client
   }) => {
      let setting = global.db.setting
      try {
         let uploadFile = require('src/uploadFile')
         let uploadImage = require('src/uploadImage')
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || ''
         if (!/video|image|gif/.test(mime)) return client.reply(m.chat, `Kirim atau reply video / foto dengan caption ${isPrefix + command}`, m)
  let media = await q.download()
         let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
         let link = await (isTele ? uploadImage : uploadFile)(media)
         setting.cover = link
         client.reply(m.chat, Func.texted('bold', `🚩 Cover successfully set.`), m)
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   owner: true,
   cache: true,
   location: __filename
}