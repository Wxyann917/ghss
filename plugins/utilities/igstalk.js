exports.run = {
   usage: ['igstalk'],
  // use: 'username',
   category: 'utilities',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
      try {
         if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'hosico_cat'), m)
         client.sendReact(m.chat, '🕒', m.key)
         let json = await Api.igstalk(args[0])
         if (!json.status) return client.reply(m.chat, Func.texted('bold', `Account not found.`), m)
         let caption = `[ *IG STALK* ]\n\n`
         caption += `• *Name* : ${json.result.fullname}\n`
         caption += `• *Username* : ${json.result.username}\n`
         caption += `• *Posts* : ${json.result.posts}\n`
         caption += `• *Followers* : ${json.result.followers}\n`
         caption += `• *Following* : ${json.result.following}\n`
         caption += `• *Bio* : ${json.result.bio}\n`

         client.sendFile(m.chat, json.result.photo_profile, 'igstalk.jpg', caption, m)
      } catch {
         return client.reply(m.chat, global.status.error, m)
      }
   },
   error: false,
   cache: true,
   location: __filename
}