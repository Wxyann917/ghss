exports.run = {
   usage: ['toanime'],
   hidden: ['jadianime'],
 //  use: 'reply photo',
   category: 'tools',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {           
     try {
  let uploadFile = require('src/uploadFile')
  let uploadImage = require('src/uploadImage')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/video|image|gif/.test(mime)) return client.reply(m.chat, `Send or reply photo with caption #${command}`, m)
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif|webp)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
    client.sendReact(m.chat, '🕒', m.key)
    client.sendFile(m.chat, `https://xzn.wtf/api/toanime?url=${link}&apikey=Ayu`, Func.filename('jpg'), ``, m)
    } catch {
    client.reply(m.chat, global.status.error, m)
   }
   },
   error: false,
   premium: true,
   limit: true
}


