exports.run = {
   usage: ['hidetag'],
 //  use: 'text',
   category: 'group',
   async: async (m, {
      client,
      text,
      participants
   }) => {
   if (!text) return client.reply(m.chat, `Kirim ${isPrefix + command} hi`, m)
      let users = participants.map(u => u.id)
      await client.reply(m.chat, text, null, {
         mentions: users
      })
   },
   admin: true,
   group: true
}