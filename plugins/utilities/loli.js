exports.run = {
	usage: ['loli'],
	category: 'random',
	async: async(m, {
	client
	}) => {
	   try {
    client.sendReact(m.chat, '🕒', m.key)
	   client.sendFile(m.chat, `https://api.akuari.my.id/randomimganime/loli`, Func.filename('jpg'), ``, m)
	   } catch {
	   client.reply(m.chat, global.status.error, m)
	   }
	},
//	premium: true,
	limit: true
}