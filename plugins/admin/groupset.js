exports.run = {
   usage: ['setdesc', 'setname'],
 //  use: 'text',
   category: 'group',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
      let value = m.quoted ? m.quoted.text : text
      if (command == 'setname') {
         if (!value) return client.reply(m.chat, Func.example(isPrefix, command, 'anjas'), m)
         if (value > 25) return client.reply(m.chat, `Kepanjangan, maksimal 25 karakter.`, m)
         await client.groupUpdateSubject(m.chat, value)
      } else if (command == 'setdesc') {
     	if (!value) return client.reply(m.chat, `Deskripsi diubah, dibaca ya dek...`, null)
         await client.groupUpdateDescription(m.chat, value)
      }
   },
   group: true,
   admin: true,
   botAdmin: true
}