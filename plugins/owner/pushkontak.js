exports.run = {
   usage: ['pushcontact'],
   hidden: ['pushcon', 'puskon', 'sendmessage'],
  // use: 'text',
  // category: 'owner',
   async: async (m, {
      command,
      isPrefix,
      client,
      text,
      participants
   }) => {
      try {
        if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'save owner😋'), m)
        client.sendReact(m.chat, '🕒', m.key)
         let rows = []
               participants.map(async (v, i) => {
                  rows.push({
                     number: v.id
                  })
               })
         for (let i in rows) {
           await Func.delay(2000)
           let nmb = await client.sendContact(rows[i].number, [{
         name: 'Contact Support',
         number: global.owner,
         about: 'Creator'
      }], null, {
         org: 'Hello',
         website: 'wtmsdrjt.github.io'
      })
           await Func.delay(1500)
           await client.reply(rows[i].number, text, nmb)
         }
         await client.reply(m.chat, '*Successfully Send Messages to All Group Members*', m)
      } catch (e) {
        client.reply(m.chat, 'error' +e, m)
         console.log(e)
         return client.reply(m.chat, global.status.error, m)
      }
   },
   owner: true,
   group: true
}