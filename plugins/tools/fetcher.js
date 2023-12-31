const fetch = require('node-fetch')
const util = require('util')
exports.run = {
   usage: ['fetch'],
   hidden: ['get'],
   category: 'tools',
   async: async (m, {
      client,
      isPrefix,
      args,
      command
   }) => {
try {      	
if (!/^https?:\/\//.test(args[0])) return client.reply(m.chat, 'Awali URL dengan http:// atau https://', m)
              client.sendReact(m.chat, '🕑', m.key)
              res = await fetch(args[0])
              if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {
              delete res
              throw `Content-Length: ${res.headers.get('content-length')}`
              }
              if (!/text|json/.test(res.headers.get('content-type'))) return client.sendFile(m.chat, args[0], '', ``, m)                       
              txtx = await res.buffer()
              try {
              txtx = util.format(JSON.parse(txtx+''))
              } catch (e) {
              txtx = txtx + ''
              } finally {
              client.reply(m.chat, txtx.slice(0, 65536) + '', m)
              }
      } catch (e) {
         return client.reply(m.chat, String(e), m)
     }
   },
   error: false,
   premium: false
}

