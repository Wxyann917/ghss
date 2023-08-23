exports.run = {
   usage: ['buylimit'],
   category: 'user info',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      Func
}) => {
   let users = global.db.users.find(v=> v.jid == m.sender)
      let maximum = 1000,
         price = 1000000
      if (command == 'buylimit') {
         if (isNaN(args[0])) return client.reply(m.chat, '• *Example* : .buylimit 1', m)
         if (args[0] < 1) return client.reply(m.chat, '• *Example* : .buylimit 1', m)
         if (users.point >= price * parseInt(args[0])) {
            if ((users.limit + parseInt(args[0])) >= maximum) return client.reply(m.chat, `*Limit amount you buy exceeds maximum limit.*`, m)
            users.point -= price * parseInt(args[0])
            users.limit += parseInt(args[0])
            return client.reply(m.chat, `✅ *Congratulations, you got +${args[0]} limit.*`, m)
         } else {
            client.reply(m.chat, `*You don't have enough points to buy ${args[0]} limit.*`, m)
         }
      }
   }, 
  limit: false  
}