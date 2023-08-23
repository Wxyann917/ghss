exports.run = {
   usage: ['twitter'],
   hidden: ['tw', 'twdl'],
  // use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, `Kirim ${isPrefix + command} url_twitter`, m)
         if (!args[0].match(/(twitter.com)/gi)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.twitter(args[0])
         let old = new Date()
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let caption = `[ *TWITTER DOWNLOADER* .]\n\n`
         caption += `• *Author* : ${json.author}\n`
         caption += `• *Likes* : ${json.like}\n`
         caption += `• *Retweets* : ${json.retweet}\n`
         caption += `• *Comments* : ${json.reply}\n\n`
         caption += global.footer
         for (let i = 0; i < json.data.length; i++) {
            if (/jpg|mp4/.test(json.data[i].type)) {
               client.sendFile(m.chat, json.data[i].url, '', '', m)
               await Func.delay(1500)
            } else if (json.data[i].type == 'gif') {
               client.sendFile(m.chat, json.data[i].url, '', '', m, {
                  gif: true
               })
            }
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