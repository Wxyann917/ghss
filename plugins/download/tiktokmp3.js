exports.run = {
   usage: ['tiktokmp3'],
   hidden: ['tikmp3'],
  // use: 'link',
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
         let lip = require("caliph-api")
         let json = await lip.downloader.tiktok(Func.ttFixed(args[0]))         
         client.sendFile(m.chat, json.audio, 'audio.mp3', '', m)
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