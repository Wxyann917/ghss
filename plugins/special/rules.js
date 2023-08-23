exports.run = {
   usage: ['rules'],
//   hidden: ['sc', 'script'],
   category: 'special',
   async: async (m, {
      client,
      args,
      command
   }) => {
   let teks = `Syarat dan Ketentuan Hutao Bot:

1. Dengan menggunakan Hutao Bot, Anda setuju untuk mematuhi dan terikat oleh syarat dan ketentuan berikut. Jika Anda tidak setuju, mohon untuk tidak menggunakan bot ini.

2. Hutao Bot menyimpan nomor telepon dan nama Anda dalam database untuk mengaktifkan beberapa fitur, seperti mengatur batas penggunaan dan fitur lainnya.
3. Hutao Bot tidak menyimpan isi percakapan atau gambar yang dikirimkan ke bot ini. Namun, kami tidak bertanggung jawab atas konten yang Anda atau pengguna lain kirimkan melalui bot ini.

4. Penggunaan Hutao Bot tidak boleh untuk tujuan ilegal atau merugikan orang lain.

5. Jangan melakukan spam atau penyalahgunaan bot ini untuk menghindari suspensi akun oleh WhatsApp.

6. Hutao Bot berhak untuk membatasi atau mencabut akses bagi pengguna yang melanggar syarat dan ketentuan ini.

7. Hutao bot mungkin mengalami kesalahan atau gangguan dalam operasinya. Kami tidak menjamin ketersediaan dan berfungsinya bot ini secara mulus.

8. Hutao Bot tidak bertanggung jawab atas kerugian atau masalah yang timbul dari penggunaan bot ini.

9. Syarat dan ketentuan ini dapat berubah tanpa pemberitahuan sebelumnya. Dengan terus menggunakan Hutao Bot, Anda setuju untuk mematuhi perubahan apapun.
10. Penggunaan fitur premium di Hutao Bot mungkin menimbulkan biaya tambahan. Pastikan untuk memahami dan menyetujui biaya tersebut sebelum menggunakan fitur premium.

11. Bot ini adalah bot publik, dan setiap pesan yang dikirim melalui bot ini dapat diakses oleh admin dan dimonitor untuk tujuan pengembangan, keamanan, dan pengelolaan.

12. Dengan menggunakan Hutao Bot, Anda bertanggung jawab atas semua tindakan Anda dan kepatuhan terhadap hukum yang berlaku.

13. Hutao Bot adalah proyek pembelajaran dan hiburan, dan tidak dimaksudkan untuk tujuan komersial.

Terima kasih telah menggunakan Hutao Bot. Selamat menikmati pengalaman Anda dengan bot ini!`.trim()
m.reply(teks)
 },
 limit: false
}