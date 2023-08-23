const yts = require('yt-search')
exports.run = {
   usage: ['ytsearch'],
   hidden: ['yts', 'ytfind'],
 //  use: 'query',
   category: 'downloader',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      try {
         if (!text) return client.reply(m.chat, `Kirim ${isPrefix + command} query`, m)
         client.sendReact(m.chat, '🕒', m.key)
         const search = await (await yts(text)).all
         if (!search || search.length == 0) return client.reply(m.chat, global.status.fail, m)
         let results = await yts(text)
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
${v.title}
• *Duration :* ${v.timestamp}
• *Uploaded :* ${v.ago}
• *Views :* ${v.views}
• *Upload by :* ${v.author.name}
• *Url :* ${v.url}
      `.trim()
      case 'channel': return `
*${v.name}* (${v.url})
${v.subCountLabel} (${v.subCount})
${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n')
  let jwb = '[ *YOUTUBE SEARCH* ]\n'
  jwb += '\n'
  jwb += teks


         client.reply(m.chat, jwb, m)
      } catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   limit: true,
   restrict: true,
   cache: true,
   location: __filename
}