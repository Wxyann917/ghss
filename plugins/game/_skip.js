exports.run = {
   usage: ['quizskip'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      var id = m.chat
      if (command == 'quizskip') {
         client.quiz = client.quiz ? client.quiz : {}
         if ((id in client.quiz)) return client.reply(m.chat, `Sesi permainan quiz berhasil di hapus.`, m).then(() => {
            clearTimeout(client.quiz[id][2])
            delete client.quiz[id]
         })
      }
   },
   group: true
}