exports.run = {
   usage: ['menfess'],
//   hidden: ['menfes', 'confes', 'confess'],
//   use: '628xxx | ayu | i love u',
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let greeting = Func.greeting()
      global.db.menfess = global.db.menfess ? global.db.menfess : {}
      if (!text) return client.reply(m.chat, Func.example(isPrefix, command, '628xxxxx | ayu | i love u'), m)
      let [jid, name, msg] = text.split`|`
      if ((!jid || !name || !msg)) return client.reply(m.chat, Func.example(isPrefix, command, '628xxxxx | ayu | i love u'), m)
      let p = (await client.onWhatsApp(jid))[0] || {}
      if (!p.exists) return client.reply(m.chat, 'Nomer yang kamu masukkan tidak terdaftar di WhatsApp!', m)
      if (p.jid == m.sender) return client.reply(m.chat, 'Jangan kirim ke diri sendiri dong🥲', m)
//      if (!m.fromMe) return client.reply(m.chat, `Jangan kirim ke nomor bot kak🥲`, m)
      let mf = Object.values(global.db.menfess).find(mf => mf.status === true)
      if (mf) return !0
      try {
         let id = +new Date
         let txt = `Hi, I want to inform you that someone has sent a ${command} message for you\n\nFrom : *${name.trim()}*\nMessage : “${msg.trim()}”`
         var msgMen =  await client.sendMessageModify(p.jid, txt, null, {
          ads: false,
          largeThumb: true,
          thumbnail: await Func.fetchBuffer(
            "https://telegra.ph/file/15b4f34999533ef7b1ae1.jpg"
          ),
         }
        )
       await Func.delay(1500)
       client.sendMessage(p.jid, { text: `Jika ingin membalas pesan rahasia ini, silahkan balas buble/balon pesan rahasia atau pesan ini dengan pesan balasanmu dan akan dikirimkan otomatis ke ${name.trim()}.`}, { quoted: msgMen})
       client.sendMessage(m.chat, { text: `Sukses mengirim pesan ${command} ke nomor ${jid.trim()}`}, { quoted: m})
            global.db.menfess[id] = {
               id,
               from: m.sender,
               name,
               receiver: p.jid,
               msg,
               status: false
            }
            return !0
      } catch (e) {
         console.log(e)
         m.reply(Func.jsonFormat(e))
      }
   },
   private: true,
   cache: true,
   location: __filename
}