exports.run = {
   usage: ['sewabot'],
   hideen: ['sewa'],
   category: 'special',
   async: async (m, {
      client,
      command
   }) => {
      let text = `Jika kamu ingin memasukkan Bot ke dalam Grup, kamu cukup membayar Rp10.000 untuk 1 Bulan, Rp30.000 untuk 5 Bulan. Untuk Sewa tidak ada yang Permanent. Jika berminat silahkan chat Owner Bot, ketik #owner

Pembayaran bisa melalui Pulsa/Dana/Ovo`
      m.reply(text)
   },
   error: false,
   cache: true
}