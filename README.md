# Aplikasi Buku Harian (Diary App)

Nama:Renci Aprilia
NIM:2430511040

## Langkah Menjalankan Proyek
1. Buka terminal dan arahkan ke dalam direktori folder proyek
2. Jalankan perintah npm install untuk menginstal seluruh dependensi yang dibutuhkan
3. Ketik perintah npx expo start di terminal untuk menjalankan server pengembangan
4. Buka aplikasi Expo Go di smartphone dan lakukan scan pada QR Code yang muncul di layar terminal

### Fitur yang Diselesaikan
1. Halaman Utama (DiaryListScreen): Membuat layar daftar utama yang menampilkan teks sambutan, foto profil, dan kumpulan catatan harian
2. Komponen Terpisah (Reusable Component): Membuat komponen khusus DiaryCard agar elemen UI kartu bisa digunakan berulang kali tanpa menulis ulang kode
3. Penerapan Props: Mengalirkan data dinamis (judul, tanggal, preview isi buku harian, gambar, dan tipe mood) dari file utama ke dalam komponen DiaryCard
4. Dynamic Styling (Gaya Dinamis): Mengubah warna border (garis tepi) pada kartu secara otomatis menggunakan fungsi switch yang merespons perubahan teks pada properti moodType
5. Penggunaan Aset Lokal: Mengimpor dan merender gambar secara offline yang tersimpan di dalam folder assets/moods