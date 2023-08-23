exports.run = {
   usage: ['remini'],
   hidden: ['hd'],
  // use: 'reply photo',
   category: 'tools',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (m.quoted ? m.quoted.message : m.msg.viewOnce) {
            let type = m.quoted ? Object.keys(m.quoted.message)[0] : m.mtype
            let q = m.quoted ? m.quoted.message[type] : m.msg
            if (/image/.test(type)) {
           	client.sendReact(m.chat, '🕒', m.key)
               let img = await client.downloadMediaMessage(q)
               let image = await scrap.uploadImageV2(img)
               let json = await Api.remini(image.data.url)
               if (!json.status) return m.reply(Func.jsonFormat(json))
               client.sendFile(m.chat, Buffer.from(json.data.image, 'base64'), 'image.jpg', '', m)
            } else client.reply(m.chat, Func.texted('bold', `Hanya untuk foto`), m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, Func.texted('bold', `Balas atau kirim foto dengan caption #remini`), m)
            if (!/image\/(jpe?g|png)/.test(mime)) return client.reply(m.chat, Func.texted('bold', `Hanya untuk foto`), m)
            client.sendReact(m.chat, '🕒', m.key)
            let img = await q.download()
            let image = await scrap.uploadImageV2(img)
            let json = await Api.remini(image.data.url)
            if (!json.status) return m.reply(Func.jsonFormat(json))
            client.sendFile(m.chat, Buffer.from(json.data.image, 'base64'), 'image.jpg', '', m)
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   limit: true,
   premium: true
}