exports.run = {
	usage: ['darkjoke'],
    hidden: ['darkjokes'],
	category: 'random',
	async: async(m, {
	client
	}) => {
	   try {
	   client.sendReact(m.chat, '🕑', m.key)
	   client.sendFile(m.chat, `https://api.lolhuman.xyz/api/meme/darkjoke?apikey=043c5de3b7cd6b1b8f2a0f90`, Func.filename('jpg'), ``, m)
	   } catch {
	   client.reply(m.chat, global.status.error, m)
	   }
	},
	error: false,
	limit: true
}