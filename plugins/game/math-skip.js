exports.run = {
   usage: ['mathskip'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.math = client.math ? client.math : {}
      let id = m.chat
      if (!(id in client.math)) return
      clearTimeout(client.math[id][2])
      delete client.math[id]
      client.reply(m.chat, Func.texted('bold', `Sesi permainan matematika telah dihapus.`), m)
   },
   group: true,
   cache: true
}