const TicTacToe = require('../../scrape/tictactoe')
exports.run = {
   usage: ['tictactoe'],
   hidden: ['ttt', 'tttexit'],
  // use: 'room',
   category: 'game',
   async: async (m, {
      client,
      text,
      isPrefix,
      isOwner,
      command
   }) => {      
   
      client.game = client.game ? client.game : {}
      if (/tttexit/i.test(command)) {
         delete client.game[Object.values(client.game).find(room => room.state === 'WAITING').id]
         return client.reply(m.chat, `*Berhasil keluar dari permainan tictactoe*`, m)
      } else {
         if (Object.values(client.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return client.reply(m.chat, `*Anda masih dalam permainan, kirim ${isPrefix}tttexit untuk keluar dari permainan*`, m)
         let room = Object.values(client.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
         if (room) {
          //  client.reply(m.chat, `*Partner ditemukan.*`, m)
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
               return {
                  X: '❌',
                  O: '⭕',
                  1: '1️⃣',
                  2: '2️⃣',
                  3: '3️⃣',
                  4: '4️⃣',
                  5: '5️⃣',
                  6: '6️⃣',
                  7: '7️⃣',
                  8: '8️⃣',
                  9: '9️⃣',
               }[v]
            })
            let str = `*TICTACTOE*\n\n`
			str += `${arr.slice(0, 3).join('')}\n`
			str += `${arr.slice(3, 6).join('')}\n`
			str += `${arr.slice(6).join('')}\n\n`
			str += `Menunggu @${room.game.currentTurn.split('@')[0]} untuk memulai\n\n`
			str += `*Room ID* : ${room.id}`
		//	str += `Kirim *${isPrefix}nyerah*untuk menyerah dan mengakui kekalahan.`
            if (room.x !== room.o) await client.reply(room.x, str, m)
            await client.reply(room.o, str, m)
         } else {
            room = {
               id: 'tictactoe-' + (+new Date),
               x: m.chat,
               o: '',
               game: new TicTacToe(m.sender, 'o'),
               state: 'WAITING'
            }
            if (text) room.name = text
            client.reply(m.chat, '*Sedang menunggu partner...*', m)
            client.game[room.id] = room
         }
      }     
   },
   error: false,
   group: true,
   cache: true,
   location: __filename
}