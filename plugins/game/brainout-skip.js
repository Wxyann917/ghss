exports.run = {
   usage: ['brainskip'],
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.brainout = client.brainout ? client.brainout : {}
      let id = m.chat
      if (!(id in client.brainout)) return
      clearTimeout(client.brainout[id][3])
      delete client.brainout[id]
      client.reply(m.chat, `Sesi permainan Brain Out telah dihapus.`, m)
   },
   group: true
}