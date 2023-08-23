const moment = require('moment-timezone')
moment.tz.setDefault(global.timezone)
const fetch = require('node-fetch')
exports.run = {
   usage: ['script'],
   hidden: ['sc'],
   category: 'special',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
         let res = await fetch('https://api.github.com/repos/neoxr/neoxr-bot')
   let json = await res.json()
         let txt = `*乂  B O T  -  S C R I P T*\n\n`
      txt += `	◦  *Name* : Hutao-bot\n`
      txt += `	◦  *Size* : 3,28 MB\n`
      txt += `	◦  *Updated* : 10 Agustus 2023\n`
      txt += `	◦  *Script* : Private\n\n`
      txt += `Want to buy my script? please contact owner, type #owner`
   client.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 1234,
      requestFrom: '0@s.whatsapp.net',
      noteMessage: {
      extendedTextMessage: {
      text: txt,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})
       },
      error: false,
      location: __filename
}