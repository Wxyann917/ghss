exports.run = {
   usage: ['snobg'],
 //  use: 'reply photo',
   category: 'tools',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      try {
         let exif = global.db.setting
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
           	client.sendReact(m.chat, '🕒', m.key)
               let img = await client.downloadMediaMessage(q)
               let image = await scrap.uploadImageV2(img)
               let json = await Api.nobg(image.data.url)
               if (!json.status) return m.reply(Func.jsonFormat(json))
               await client.sendSticker(m.chat, await Func.fetchBuffer(json.data.no_background), m, {
                  packname: exif.sk_pack,
                  author: exif.sk_author
               })
            } else client.reply(m.chat, `Cuma buat foto wir`, m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, `Kirim atau balas foto.`, m)
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, `Cuma buat foto wir`, m)
            client.sendReact(m.chat, '🕒', m.key)
            let img = await q.download()
            let image = await scrap.uploadImageV2(img)
            let json = await Api.nobg(image.data.url)
            if (!json.status) return m.reply(Func.jsonFormat(json))
            await client.sendSticker(m.chat, await Func.fetchBuffer(json.data.no_background), m, {
               packname: exif.sk_pack,
               author: exif.sk_author
            })
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   premium: true,
   limit: true
}