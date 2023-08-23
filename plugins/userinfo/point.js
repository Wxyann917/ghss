exports.run = {
   usage: ['point'],
   category: 'user info',
   async: async (m, {
      client,
      isPrefix
   }) => {
      let user = global.db.users.find(v=> v.jid == m.sender)
      if (user.point < 1) return client.reply(m.chat, `*Kamu tidak mempunyai point.*`, m)
      client.reply(m.chat, Func.texted('bold', `Kamu mempunyai point sebanyak ${Func.formatNumber(user.point)} point.`), m)
   },
   error: false
}