exports.run = {
   usage: ['outsider'],
 //  use: 'option',
   category: 'group',
   async: async (m, {
      client,
      args,
      isPrefix,
      command,
      participants
   }) => {
      try {
         let member = participants.filter(v => !v.admin).map(v => v.id).filter(v => !v.startsWith('62') && v != client.decodeJid(client.user.id))
         if (!args || !args[0]) {
            if (member.length == 0) return client.reply(m.chat, `Grup ini bersih coy.`, m)
            let teks = `${member.length} outsiders ditemukan, kirim ${isPrefix + command} -y untuk mengeluarkan mereka.\n\n`
            teks += member.map(v => '◦  @' + v.replace(/@.+/, '')).join('\n')
            client.reply(m.chat, teks, m)
         } else if (args[0] == '-y') {
            for (let jid of member) {
               await Func.delay(2000)
               await client.groupParticipantsUpdate(m.chat, [jid], 'remove')
            }
            await client.reply(m.chat, `Selesai, ${member.length} sider udah dikeluarkan.`, m)
         }
      } catch (e) {
         client.reply(m.chat, Func.jsonFormat(e), m)
      }
   },
   admin: true,
   group: true,
   botAdmin: true
}