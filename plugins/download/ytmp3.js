exports.run = {
   usage: ['ytmp3'],
   category: 'downloader',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
    if (!args || !args[0]) return client.reply(m.chat, `Kirim ${isPrefix + command} url_youtube`, m)
 //   if (!args[0].match(/(https:\/\/www.youtube.com)/gi)) return client.reply(m.chat, global.status.invalid, m)
    let json = await Func.fetchJson('https://api.akuari.my.id/downloader/yt1?link=' + args[0])
    let ca = `[ *YOUTUBE DOWNLOADER* ]\n\n`
    ca += `• *Judul* : ` + json.info.title + `\n`
    ca += `• *Ukuran* : ` + json.info.size + `\n`
    ca += `• *Penonton* : ` + json.info.views + `\n`
    ca += `• *Kreator* : ` + json.info.channel + `\n\n`
    ca += global.footer   
    client.reply(m.chat, ca, m)
      client.sendMessage(m.chat, { document: await Func.fetchBuffer(json.urldl_audio), fileName: `${json.info.title}.mp3`, mimetype: 'audio/mp3'}, { quoted: m })
   },
  limit: true
}