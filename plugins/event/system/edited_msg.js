exports.run = {
   async: async (m, {
      client
   }) => {
      try {
         if (m.mtype == 'editedMessage') {
         if (!m.mtype) return
            let teks = `乂  *E D I T E D*\n\n`
            teks += `@${json.data.jid.replace(/@.+/, '')} edited the message.\n\n`
            teks += `➠ *From* : ${json.data.from}\n`
            teks += `➠ *To* : ${json.data.to}`
            //teks += global.footer
            return m.reply(teks)
         }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
   group: true,
   cache: true,
   location: __filename
}