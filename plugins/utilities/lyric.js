var hxz = require('hxz-api')
exports.run = {
   usage: ['lyric'],
   hidden: ['lirik'],
 //  use: 'query',
   category: 'utilities',
   async: async (m, {
      client,
      args,
      text,
      isPrefix,
      command
   }) => {
		if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'sempurna'), m)
  client.sendReact(m.chat, '🕒', m.key)
	try {
		var result = await hxz.lirik(text)
		client.sendFile(m.chat, result.thumb, 'thumb.jpg', `[ *LYRIC SEARCH* ]\n\n*Result from ${text}*\n\n${result.lirik}`, m)
	} catch (e) {
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   limit: true,
   location: __filename
}
