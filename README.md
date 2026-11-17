# SisaBaik — Aplikasi Web Penyelamatan Makanan

SisaBaik merupakan aplikasi web yang menghubungkan penyedia makanan dengan pembeli melalui penawaran makanan berlebih yang masih layak konsumsi. Aplikasi ini menyediakan fitur pengelolaan penawaran, pemesanan, dan pemantauan status pesanan.

## 1. Teknologi yang Digunakan

| Komponen | Teknologi |
|---|---|
| Backend | Node.js dan Express 5 |
| Frontend | Vue 3 |
| Build tool | Vite |
| Database | PostgreSQL |
| Database cloud | Neon |
| Hosting aplikasi | Render |
| Autentikasi | JSON Web Token (JWT) |
| Pengolahan gambar | Sharp |

## 2. Demo Aplikasi

**URL aplikasi:**
https://sisabaik-ilda.onrender.com

Aplikasi dapat diakses melalui browser. Beberapa fitur memerlukan akun dan autentikasi pengguna.

## 3. Persyaratan Sistem

Sebelum menjalankan aplikasi secara lokal, siapkan:

- Node.js versi 22 atau lebih baru yang sesuai dengan kebutuhan frontend.
- npm.
- PostgreSQL untuk database lokal.
- Git untuk mengelola kode sumber.

## 4. Instalasi Proyek

Clone repository:

```bash
git clone https://github.com/hidayatiilda746-stack/sisabaik-api.git
cd sisabaik-api
```

Install dependency backend:

```bash
npm ci
```

Install dependency frontend:

```bash
npm --prefix frontend ci --include=dev
```

## 5. Konfigurasi Environment

Salin template konfigurasi lokal menjadi `.env`, kemudian sesuaikan dengan database lokal.

```bash
copy .env.example .env
```

Variabel konfigurasi yang digunakan:

| Variabel | Fungsi |
|---|---|
| PORT | Port server backend |
| PGHOST | Host database PostgreSQL |
| PGPORT | Port database |
| PGDATABASE | Nama database |
| PGUSER | Pengguna database |
| PGPASSWORD | Password database |
| JWT_SECRET | Secret untuk autentikasi JWT |

`JWT_SECRET` harus berupa 64 digit heksadesimal acak. Jangan membagikan atau memasukkan nilai secret ke repository.

Untuk lingkungan cloud, gunakan `.env.cloud.example` sebagai acuan konfigurasi database Neon. Koneksi cloud menggunakan `PGSSL=require`.

Jangan mengunggah file `.env`, `.env.cloud`, atau informasi kredensial ke repository publik.

## 6. Menjalankan Aplikasi Secara Lokal

Build frontend:

```bash
npm run build
```

Jalankan aplikasi lokal:

```bash
npm run start:local
```

Server lokal menggunakan alamat:

```text
http://127.0.0.1:3000
```

Untuk menjalankan backend dalam mode pengembangan:

```bash
npm run dev
```

Frontend juga menyediakan server pengembangan Vite:

```bash
cd frontend
npm run dev
```

## 7. Database

Aplikasi menggunakan PostgreSQL untuk menyimpan data pengguna, penawaran makanan, dan transaksi pemesanan.

Beberapa perintah database yang tersedia:

```bash
npm run db:migrate
```

Untuk inisialisasi database lokal:

```bash
npm run db:init
```

Perintah cloud tersedia melalui script khusus, misalnya:

```bash
npm run db:migrate:cloud
npm run db:init:cloud
```

Pastikan konfigurasi database sesuai dengan lingkungan yang digunakan sebelum menjalankan perintah tersebut.

## 8. Fitur Aplikasi

Fitur utama SisaBaik meliputi:

- Registrasi dan login pengguna.
- Verifikasi akun penyedia.
- Dashboard penyedia.
- Pembuatan dan pengelolaan penawaran makanan.
- Tampilan daftar penawaran bagi pembeli.
- Pemesanan makanan.
- Dashboard pembeli dan penyedia.
- Pengelolaan status pesanan.
- Pembatasan akses fitur berdasarkan autentikasi.

## 9. Pengujian Aplikasi

Pengujian otomatis deployment dapat dijalankan menggunakan:

```bash
npm run deploy:test -- https://sisabaik-ilda.onrender.com
```

Pengujian alur transaksi lokal tersedia melalui:

```bash
npm run workflow:test
```

Perintah pengujian lainnya:

```bash
npm run api:test:chapter7
npm run auth:test
```

Pengujian yang memerlukan database lokal harus menggunakan konfigurasi `.env` yang sesuai.

### Hasil Pengujian Deployment

Pada 17 November 2026, pengujian deployment menghasilkan:

- 10 pemeriksaan berhasil.
- Health check server berhasil.
- Health check API dan koneksi database berhasil.
- HTML dan aset frontend berhasil diakses.
- Endpoint tidak tersedia memberikan respons 404.
- Endpoint yang memerlukan autentikasi menolak akses tanpa autentikasi dengan respons 401.
- File internal yang diuji tidak dapat diakses.

Bukti hasil pengujian tersedia pada:

`docs/minggu12/bukti/pengujian-deployment.txt`

## 10. Dokumentasi Week 12

Dokumentasi pengujian dan evaluasi proyek tersedia pada folder:

`docs/minggu12/`

Isi dokumentasi:

| File | Keterangan |
|---|---|
| `matriks-pengujian.md` | Rangkuman skenario dan hasil pengujian |
| `log-pengujian-cloud.md` | Catatan pengujian lingkungan cloud |
| `performa.md` | Evaluasi performa aplikasi |
| `aksesibilitas.md` | Evaluasi aksesibilitas |
| `refleksi.md` | Refleksi pengembangan proyek |
| `bukti/pengujian-deployment.txt` | Bukti pengujian otomatis deployment |
| `bukti/pengujian-alur-transaksi.txt` | Catatan pengujian manual alur transaksi |

## 11. Keterbatasan dan Pengembangan

Pengembangan selanjutnya difokuskan pada penyelesaian pengujian alur transaksi, peningkatan responsivitas tampilan, audit aksesibilitas, pengukuran performa, dan penyempurnaan pengalaman pengguna.

Beberapa hasil pengujian lanjutan masih perlu dilengkapi dengan bukti aktual sebelum dapat dinyatakan selesai.

## 12. Pengembang

**Proyek:**SisaBaik
**Repository:**https://github.com/hidayatiilda746-stack/sisabaik-api
**Deployment:**https://sisabaik-ilda.onrender.com