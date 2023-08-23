const axios = require('axios')
exports.run = {
   usage: ['truth'],
  // hidden: ['lagu', ''],
//   use: 'query',
   category: 'game',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let boc = require('@bochilteam/scraper')
      let jum = await boc.truth()
      client.reply(m.chat, jum, m)
   },
   error: false,
   limit: true,
   group: true,
   cache: true,
   location: __filename
}