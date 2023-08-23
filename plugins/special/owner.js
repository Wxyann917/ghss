exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      let text = `http://t.me/w4timsdrjt\nHanya menerima Chat di Telegram!`
      m.reply(text)
   },
   error: false,
   cache: true,
}