exports.run = {
   usage: ['podcast'],
 //  use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, `Kirim ${isPrefix + command} url_podcast`, m)
         if (!args[0].match(/^(?:https?:\/\/)?(?:podcasts\.)?(?:google\.com\/)(?:feed\/)(?:\S+)?$/)) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.podcast(args[0])
         if (!json.status) return client.reply(m.chat, Func.jsonFormat(json), m)
         let teks = `*[ PODCAST DOWNLOADER ]*\n\n`
         teks += `• *Title* : ${json.data.title}\n`
         teks += `• *Author* : ${json.data.author}\n`
         teks += `• *Duration* : ${json.data.duration}\n\n`
         teks += global.footer
        // teks += `_Wait a minute, sending media_`
         client.sendMessageModify(m.chat, teks, m, {
            ads: false,
            largeThumb: true,
            thumbnail: await Func.fetchBuffer('https://telegra.ph/file/92be727e349c3cf78c98a.jpg')
         }).then(() => {
            client.sendFile(m.chat, json.data.audio, json.data.title + '.mp3', '', m, {
               document: true
            })
         })
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   cache: true,
   location: __filename
}