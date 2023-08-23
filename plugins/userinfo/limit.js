exports.run = {
   usage: ['limit'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix
   }) => {
      let user = global.db.users.find(v => v.jid == m.sender)
      if (user.limit < 1) return client.reply(m.chat, `Limit penggunaan bot mu sudah habis dan akan di reset pada pukul 00.00 WIB\n\nUntuk mendapatkan lebih banyak limit upgrade ke premium kirim *#premium*.`, m)
      client.reply(m.chat, `Limit kamu : [ *${Func.formatNumber(user.limit)}* ]${!user.premium ? `\n\nUntuk mendapatkan lebih banyak limit upgrade ke premium kirim *#premium*.` : ''}`, m)
   },
   error: false
}