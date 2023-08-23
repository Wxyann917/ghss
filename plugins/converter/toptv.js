exports.run = {
   usage: ['toptv'],
  // use: 'reply video',
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
            if (/video/.test(type)) {
           	client.sendReact(m.chat, '🕒', m.key)
               let buffer = await client.downloadMediaMessage(q)
               client.sendPtv(m.chat, buffer)
            } else client.reply(m.chat, `Cuma buat video wir`, m)
         } else {
            let q = m.quoted ? m.quoted : m
            let mime = (q.msg || q).mimetype || ''
            if (!mime) return client.reply(m.chat, `Balas videonya lah`, m)
            if (!/video/.test(mime)) return client.reply(m.chat, `Cuma buat video wir`, m)
            client.sendReact(m.chat, '🕒', m.key)
            let buffer = await q.download()
            client.sendPtv(m.chat, buffer)
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false
}