const axios = require('axios')
exports.run = {
   usage: ['qc'],
 //  use: 'text',
   category: 'tools',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, `Kirim ${isPrefix + command} hutao bot`, m)
         if (text.length > 35) return client.reply(m.chat, `Maksimal 35 karakter wir`, m)
         const exif = global.db.setting
         try {
            pic = await client.profilePictureUrl(m.quoted ? m.quoted.sender : m.sender, 'image')
         } catch {
            pic = 'https://srv.neoxr.tk/files/z8hI5T.jpg'
         }
         const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
               "entities": [],
               "avatar": true,
               "from": {
                  "id": 1,
                  "name": m.quoted ? global.db.users.find(v => v.jid == m.quoted.sender).name : m.pushName,
                  "photo": {
                     "url": pic
                  }
               },
               "text": text,
               "replyMessage": {}
            }]
         }
         const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         const buffer = Buffer.from(json.data.result.image, 'base64')
         client.sendSticker(m.chat, buffer, m, {
            packname: exif.sk_pack,
            author: exif.sk_author
         })
      } catch (e) {
         console.log(e)
         client.reply(m.chat, `Waduh, gagal membuat qc`, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}