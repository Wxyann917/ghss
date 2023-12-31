exports.run = {
   usage: ['totag'],
  // use: 'reply media',
   category: 'group',
   async: async (m, {
      client,
      text,
      command,
      participants
   }) => {
      try {
      if (!m.quoted) return client.reply(m.chat, 'Reply to chattings', m)
         client.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
         let q = m.quoted ? m.quoted : m
         let mime = (q.msg || q).mimetype || q.mtype || ''
         let member = participants.map(v => v.id)
         if (text) {
            client.reply(m.chat, text, null, {
               mentions: member
            })
         } else if (/extended|conver/.test(mime)) {
            client.reply(m.chat, q.text, null, {
               mentions: member
            })
         } else if (/video|image\/(jpe?g|png)/.test(mime)) {
            let media = await q.download()
            let caption = q.text || ''
            client.sendFile(m.chat, media, '', caption, null, null, {
               contextInfo: {
                  mentionedJid: member
               }
            })
         } else if (/audio/.test(mime)) {
            let media = await q.download()
            let caption = q.text || ''
            client.sendFile(m.chat, media, '', '', null, {
               ptt: true
            }, {
               contextInfo: {
                  mentionedJid: member
               }
            })
         } else if (/image\/webp/.test(mime)) {
            let media = await q.download()
            client.sendSticker(m.chat, media, null, {
               pack: global.db.setting.sk_pack,
               author: global.db.setting.sk_author,
               mentions: member
            })
         } else return client.reply(m.chat, `Media / teks tidak ditemukan atau media tidak didukung`, m)
      } catch (e) {
         console.log(e)
         client.reply(m.chat, `Media / teks tidak ditemukan atau media tidak didukung`, m)
      }
   },
   admin: true,
   limit: true,
   group: true
}