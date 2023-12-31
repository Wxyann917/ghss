exports.run = {
   async: async (m, {
      client,
      body,
      users,
      isPrefix
   }) => {
      try {
  if (m.quoted && /songclue|songskip/i.test(m.quoted.text)) {
      client.tebaklagu = client.tebaklagu ? client.tebaklagu : {}
      let reward = Func.randomInt(500, 500000)
      let id = m.chat
//      if (!(id in client.tebaklagu) && /songclue|songskip/i.test(m.quoted.text)) return client.reply(m.chat, Func.texted('bold', `Sesi telah berakhir, Ketik _${global.db.setting.multiprefix ? global.db.setting.prefix[0] : global.db.setting.onlyprefix}whatsong_ untuk memulai game baru`), m)
      if (m.quoted.id == client.tebaklagu[id][0].id) {
         let json = JSON.parse(JSON.stringify(client.tebaklagu[id][1]))
         if (['Timeout', ''].includes(m.text)) return !0
         if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
            await client.reply(m.chat, 'Benar', m).then(() => {
               client.reply(m.chat, `+ ${Func.formatNumber(reward)} point.`, m)
               global.db.users.find(v=> v.jid == m.sender).point += reward
               clearTimeout(client.tebaklagu[id][3])
               delete client.tebaklagu[id]
            })
         } else {
            let isPoint = global.db.users.find(v=> v.jid == m.sender)
            if (isPoint.point == 0) return client.reply(m.chat, 'Salah', m)
            isPoint.point < reward ? isPoint.point = 0 : isPoint.point -= reward
            await client.reply(m.chat, 'Salah', m).then(() => {
               client.reply(m.chat, `- ${Func.formatNumber(reward)} point.`, m)
            })
         }
      }
   }
      } catch (e) {
         return client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   error: false,
  // group: true,
   cache: true,
   location: __filename
}