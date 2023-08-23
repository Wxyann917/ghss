const {
  execSync
} = require('child_process')
exports.run = {
  usage: ['disk'],
//  hidden: ['disk'],
//  category: 'owner',
  async: async (m, {
    client
  }) => {
    await client.sendReact(m.chat, '🕒', m.key)
    var check = process.memoryUsage().rss
    var out = check / 1048576
    await client.reply(m.chat, `${out.toFixed(2)}MB`, m)
  },
  owner: true,
  cache: true,
  location: __filename
}