exports.run = {
	usage: ['dare'],
  //  hidden: ['meme'],
	category: 'game',
	async: async(m, {
	client
	}) => {
	   try {
	   let boc = require('@bochilteam/scraper')
       let jum = await boc.dare()
       client.reply(m.chat, jum, m)
	   } catch {
	   client.reply(m.chat, global.status.error, m)
	   }
	},
	error: false,
	group: true,
	limit: true
}