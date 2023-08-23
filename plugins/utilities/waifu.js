exports.run = {
	usage: ['waifu'],
	category: 'random',
	async: async(m, {
	client
	}) => {
	   try {
    client.sendReact(m.chat, '🕒', m.key)
	   client.sendFile(m.chat, `https://api.akuari.my.id/randomimganime/waifu`, Func.filename('jpg'), ``, m)
	   } catch {
	   client.reply(m.chat, global.status.error, m)
	   }
	},
	error: false,
	limit: true
}