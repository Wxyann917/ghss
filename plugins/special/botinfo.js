exports.run = {
   usage: ['rules'],
//   hidden: ['sc', 'script'],
   category: 'special',
   async: async (m, {
      client,
      args,
      command
   }) => {
   //   if (command == 'script' || command == 'sc') return client.reply(m.chat, info(), m)
      if (command == 'rules') return client.reply(m.chat, tnc(), m)
   },
   error: false,
   cache: true,
   location: __filename
}

let info = () => {
   return `This bot was created and developed with the purpose of *learning*.
   
Source :
- https://instagram.com/_wtmsdrjt`
}

const tnc = () => {
   return `• Data user, grup, dan chat akan terhapus secara otomatis jika tidak ada aktivitas yang terdeteksi selama 7 hari.

• Pengguna gratis mendapatkan 15 limit perhari dan pengguna premium mendapatkan 1000 limit selama satu bulan.

• Jangan spam, jeda setiap penggunaan perintah selama 3 detik.

• Jangan melakukan panggilan suara atau Telepon & Panggilan Video, jika Anda melakukannya akan diblokir.

• Jangan toxic, karena kamu akan mendapatkan sanksi berupa banned dan block.

• Jangan mencari & membuat konten dewasa +18, misalnya membuat stiker dari foto bugil atau mencari desahan ASMR.
 
• Jika ingin unblock dan unbanned, masing-masing akan dikenakan biaya sebesar Rp. Rp.10.000,- .
 
• Spammer akan dibanned secara permanen untuk pengguna gratis dan premium, tidak ada pengembalian uang.
 
• Semua Syarat & Ketentuan dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.`
}