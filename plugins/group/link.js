exports.run = {
   usage: ['linkgroup'],
   hidden: ['linkgc'],
   category: 'group',
   async: async (m, {
      client
   }) => {
      await client.reply(m.chat, 'https://chat.whatsapp.com/' + (await client.groupInviteCode(m.chat)), m)
   },
   group: true,
   botAdmin: true
}