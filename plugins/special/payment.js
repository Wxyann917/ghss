exports.run = {
   usage: ['payment'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
      let txt = '081617126154/Gopay\n085771647181/Ovo'
      client.sendMessageModify(m.chat, txt, m, {
       title: 'Instagram : @_wtmsdrjt',
       ads: false,
       largeThumb: true,
       thumbnail: global.db.setting.cover,
       url: global.db.setting.link
       })
   },
   error: false,
   cache: true,
   location: __filename
}