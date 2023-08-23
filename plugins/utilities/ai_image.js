exports.run = {
   usage: ['ai-image'],
   hidden: ['ai-img', 'aiimg'],
//   use: 'query',
   category: 'utilities',
   async: async (m, {
      client,
      text,
      isPrefix,
      command
   }) => {
         if (!text) return client.reply(m.chat, Func.example(isPrefix, command, `indonesia-bali`), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Func.fetchJson('https://mfarels.my.id/api/openai-image?text=' + text)
         client.sendFile(m.chat, json.result, 'image.jpg', ``, m)
   },
   error: false,
   limit: true,
   restrict: true
}