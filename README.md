# SisaBaik API & Frontend

Backend REST API dan Frontend komponen berbasis Node.js, Express, PostgreSQL, Vue 3, dan Vite[cite: 3].

## Prasyarat & Perangkat
* Node.js (v22.18.0+)[cite: 10]
* npm (v10+)[cite: 8]
* PostgreSQL dengan database bernama `sisabaik_dev` (untuk backend)[cite: 50]

## Frontend Vue (Chapter 9)
Antarmuka Single-File Components (SFC) dengan Vite[cite: 2, 4]. Menggunakan fixture data lokal di memori (`src/data/penawaran-latihan.js`) dan 4 aset SVG lokal[cite: 9, 43].

```bash
# Masuk ke folder frontend
cd frontend

# Install dependency
npm install

# Jalankan server pengembangan ([http://127.0.0.1:5173/](http://127.0.0.1:5173/))
npm run dev

# Build produksi
npm run build

# Preview hasil build ([http://127.0.0.1:4173/](http://127.0.0.1:4173/))
npm run preview
