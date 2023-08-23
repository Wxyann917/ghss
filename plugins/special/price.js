exports.run = {
   usage: ['price', 'premium'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix,
      command
   }) => {
   let teks = '*么 I N F O  P R E M I U M*\n\n'
   teks += '*BENEFIT*\n\n'
   teks += '◦ Bisa menggunakan semua fitur.\n'
   teks += '◦ Mendapatkan 10.000 limit.\n'
   teks += '◦ Jika bot mode grouponly user premium bisa memainkan di pesan pribadi.\n\n'
   teks += '*PRICE*\n'
   teks += '◦10.000 selama 1 bulan (tidak harus langganan setiap bulan).\n\n'
   teks += '*PAYMENT*\n\n'
   teks += '◦ Ewallet = Dana/Ovo\n'
   //teks += '◦ Bank = Tersedia Semua Bank.\n'
//   teks += '◦ Qris = Tersedia Semua Qris.\n'
   teks += '◦ Pulsa = Indosat\n\n'
   teks += 'silahkan hubungi *#owner* untuk melakukan pembelian premium.\n'
   teks += 'Invite bot ke group kamu ? ketik *#sewabot*'
      client.reply(m.chat, teks, m)
   },
   error: false,
   cache: true,
   location: __filename
}