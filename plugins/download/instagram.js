exports.run = {
   usage: ['instagram'],
   hidden: ['igdl', 'ig'],
 //  use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, `Kirim ${isPrefix + command} url_instagram`, m)
         if (!args[0].match(/(https:\/\/www.instagram.com)/gi)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Api.ig(Func.igFixed(args[0]))
         if (!json.status) return client.reply(m.chat, 'Maaf Terjadi Kesalahan', m)
         json.data.map(async v => {
            client.sendFile(m.chat, v.url, v.type == 'mp4' ? Func.filename('mp4') : Func.filename('jpg'), ``, m)
            await Func.delay(1500)
         })
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
