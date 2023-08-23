exports.run = {
   usage: ['apakah', 'kapankah', 'siapakah'],
 //  use: 'text',
   category: 'random',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      if (command == 'apakah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'saya pedofil'), m)
      	let random = Func.random(['iya', 'mungkin iya', 'yo ndak tau', 'kepo bat lu', 'mungkin tidak', 'jelas tidak dong', 'jelas iya dong', 'gamau jawab soalnya lu jelek'])
      	let teks = `Message: *${random}*\n\n~ Hutao`
      	client.reply(m.chat, teks, m)
      } else if (command == 'kapankah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'saya menemukan loli tersesat'), m)
      	let time = Func.randomInt(1, 50)
      	let unit = Func.random(['detik', 'menit', 'jam', 'hari', 'minggu', 'bulan', 'tahun', 'dekade', 'abad'])
      	let teks = `Message: *${time} ${unit} lagi . . .*\n\n~ Hutao`
      	client.reply(m.chat, teks, m)
      } else if (command == 'siapakah') {
      	if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'pedofil disini'), m)
      	let member = participants.map(v => v.id)
      	let who = Func.random(member)
      	let teks = `Message: @${who.replace(/@.+/, '')}\n\n~ Hutao`
    	  client.reply(m.chat, teks, m)
      }
   },
   error: false,
   group: true,
   limit: true,
   cache: true,
   location: __filename
}