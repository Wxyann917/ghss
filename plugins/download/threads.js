exports.run = {
   usage: ['threads'],
//   use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, `Kirim ${isPrefix + command} url_threads`, m)
         if (!args[0].match(/(https:\/\/www.threads.net)/gi)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Func.fetchJson('https://api.alyachan.biz.id/api/threads?url=' + args[0] + '&apikey=tGQXJm')
         if (!json.status) return client.reply(m.chat, global.status.error, m)
         json.data.map(async v => {
            client.sendFile(m.chat, v.url, '', ``, m)
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