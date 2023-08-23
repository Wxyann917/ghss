exports.run = {
   usage: ['igstory'],
   hidden: ['igs'],
  // use: 'username / link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, `Kirim ${isPrefix + command} url_igs`, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Api.igs(args[0])
         if (!json.status) return client.reply(m.chat, global.status.fail, m)
         for (let i = 0; i < json.data.length; i++) {
            client.sendFile(m.chat, json.data[i].url, ``, ``, m)
            await Func.delay(1500)
         }
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}