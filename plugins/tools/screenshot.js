exports.run = {
   usage: ['screenshot'],
   hidden: ['ssweb', 'ss'],
  // use: 'link',
   category: 'tools',
   async: async (m, {
      client,
      isPrefix,
      text,
      command
   }) => {           
     try {
        if (!text) return client.reply(m.chat, Func.example(isPrefix, command, 'https://exif.tools/'), m)
    client.sendReact(m.chat, '🕒', m.key)
    client.sendFile(m.chat, `https://xzn.wtf/api/ssweb?type=dekstop&url=${text}&apikey=ayu`, Func.filename('jpg'), ``, m)
    } catch {
    client.reply(m.chat, global.status.error, m)
   }
   },
   error: false,
   limit: true
}

