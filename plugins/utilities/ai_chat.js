exports.run = {
  usage: ['openai'],
  hidden: ['ai'],
  category: 'utilities',
  async: async(m, {
    client,
    text,
    isPrefix,
    command
  }) => {
    try {
      if (!text) return client.reply(m.chat, `Kirim ${isPrefix + command} cara masak mie`, m)
      client.sendReact(m.chat, '🕒', m.key)
      let json = await Func.fetchJson('https://api.akuari.my.id/ai/gpt?chat=' + text)
      let txt = `${json.respon}`.trim()
      client.reply(m.chat, txt, m)
    } catch (e) {
      client.reply(m.chat, global.status.error, m)
    }
  },
  error: false,
  limit: true,
  restrict: true
  }