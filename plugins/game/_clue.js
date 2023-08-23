exports.run = {
   usage: ['quizclue'],
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
      var id = m.chat
      if (command == 'quizclue') {
         client.quiz = client.quiz ? client.quiz : {}
         if ((id in client.quiz)) {
            let json = JSON.parse(JSON.stringify(client.quiz[id][1]))
            var clue = ''
            for (let i = 0; i < json.jawaban.length; i++) {
               if (client.quiz[m.chat][3].includes(json.jawaban[i])) {
                  clue += '```' + Func.ucword(json.jawaban[i]) + '```\n'
               } else {
                  clue += '```' + Func.ucword(json.jawaban[i].replace(/[bcdfghjklmnpqrstvwxyz]/g, '_')) + '```\n'
               }
            }
            let pop = clue.split('\n')
            pop.pop()
            let isClue = pop.map((v, i) => (i + 1) + '. ' + v).join('\n')
            client.reply(m.chat, isClue, m)
         }
      }
   },
   group: true
}