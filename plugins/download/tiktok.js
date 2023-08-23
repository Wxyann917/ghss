exports.run = {
   usage: ['tiktok'],
   hidden: ['tt'],
 //  use: 'link',
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, `Kirim ${isPrefix + command} url_tiktok`, m)
         if (!args[0].match('tiktok.com')) return client.reply(m.chat, global.status.invalid, m)
         client.sendReact(m.chat, '🕒', m.key)
         let old = new Date()
         let json = await Api.tiktok(Func.ttFixed(args[0]))
         if (!json.status || !json.data.video) return client.reply(m.chat, Func.texted('bold', `Error! private videos or videos not available.`), m)
         let caption = `${json.data.caption || ''}`
         if (command == 'tiktok' || command == 'tt') {
            if (json.data.video) return client.sendFile(m.chat, json.data.video, 'video.mp4', caption, m)
            if (json.data.photo) {
               for (let p of json.data.photo) {
                  client.sendFile(m.chat, p, 'image.jpg', '', m)
                  await Func.delay(1500)
               }
            }
         }
         if (command == 'tikwm') return client.sendFile(m.chat, json.data.videoWM, 'video.mp4', caption, m)
         if (command == 'tikmp3') return !json.data.audio ? client.reply(m.chat, global.status.fail, m) : client.sendFile(m.chat, json.data.audio, 'audio.mp3', '', m)
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