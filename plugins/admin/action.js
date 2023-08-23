exports.run = {
   usage: ['demote', 'kick', 'promote'],
   category: 'group',
   async: async (m, {
      client,
      text,
      isPrefix,
      command,
      participants
   }) => {
      let number = m.quoted ? m.quoted.sender : m.mentionedJid.length != 0 ? m.mentionedJid[0] : isNaN(text) ? text.replace(/[()+\s-]/g, '') + '@s.whatsapp.net' : text
      if (!text && !m.quoted) return client.reply(m.chat, `Tag atau balas pesan target`, m)
      if (await client.onWhatsApp(number).length == 0) return client.reply(m.chat, `Nomor tidak terdaftar di WhatsApp.`, m)
      try {
         let mention = number.replace(/@.+/g, '')
         let users = m.isGroup ? participants.find(u => u.id == number) : {}
         if (!users) return client.reply(m.chat, `@${mention} udah keluar dari grup atau gaada orangnya.`, m)
         if (number  == client.decodeJid(client.user.id))return client.reply(m.chat, `So asik lo mau kick gua`, m)
         if (command == 'kick') return client.groupParticipantsUpdate(m.chat, [number], 'remove')
         if (command == 'demote') return client.groupParticipantsUpdate(m.chat, [number], 'demote')
         if (command == 'promote') return client.groupParticipantsUpdate(m.chat, [number], 'promote')
      } catch (e) {
      	console.log(e)
      	client.reply(m.chat, global.status.error, m)
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}