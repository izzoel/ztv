# 🎬 ZTV Stream - Platform Streaming Film & Serial TV Premium

<p align="center">
  <img src="https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white" alt="Laravel" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Inertia.js-9553E9?style=for-the-badge&logo=inertia&logoColor=white" alt="Inertia.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TMDB_API-01B4E4?style=for-the-badge&logo=the-movie-database&logoColor=white" alt="TMDB API" />
</p>

**ZTV Stream** adalah web aplikasi streaming film dan serial TV modern berbasis **Laravel 12**, **Inertia.js**, **React**, dan **TypeScript**. Aplikasi ini terintegrasi langsung secara real-time dengan **The Movie Database (TMDB) API** serta dilengkapi dengan mesin *multi-server video player* untuk pengalaman menonton tanpa hambatan.

---

## ✨ Fitur-Fitur Utama

- 🌟 **Real-Time TMDB Live Catalog**:
  - Katalog film populer, serial TV, serta genre aksi, sci-fi, dan misteri dimuat secara otomatis dari TMDB API.
  - Detail lengkap mencakup rating IMDb, skor kecocokan, tahun rilis, batas usia, sinopsis, dan daftar episode.

- 🎬 **Multi-Server Video Player (Streambert Engine)**:
  - Dukungan pemutar video berbasis bingkai (*framed player*) yang bersih dan responsif.
  - Opsi pergantian server streaming otomatis & manual:
    - **Vidsrc.to** *(Server Default)*
    - **Videasy.net**
    - **Vidking**
    - **2embed.cc**
    - **Autoembed.co**
  - Dilengkapi animasi indikator keterhubungan server dan tombol **Muat Ulang Server** jika video mengalami kendala.

- ⏳ **Skeleton Loading Animated UI**:
  - Tampilan *loading skeleton* animasi yang mulus saat aplikasi sedang terhubung dan mengambil data dari TMDB API.

- 🔍 **Live Search Real-Time**:
  - Modal pencarian instan untuk mencari film dan serial TV secara cepat berdasarkan judul dari database TMDB.

- 📌 **Fitur Daftar Saya (Watchlist)**:
  - Pengguna dapat menyimpan film/serial favorit mereka ke daftar tontonan yang tersimpan secara lokal (*localStorage*).

- 🎨 **Desain UI/UX Premium**:
  - Estetika *Dark Mode* modern dengan *glassmorphism*, sorotan *Hero Spotlight* otomatis, serta *Carousel Movie Rows* & *Top 10 Hari Ini*.
  - Bebas dari penumpukan modal (tiap modal detail dan video player berjalan secara independen dan terisolasi).

---

## 🛠️ Teknologi yang Digunakan

### **Backend Framework**
- **Laravel 12** (PHP >= 8.2)
- **Inertia.js** (Adapter Monolith Modern)

### **Frontend & Styling**
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React Icons**

### **Build Tool & Bundler**
- **Vite** / **Rolldown**

### **External APIs**
- **The Movie Database (TMDB) API v3**
- **Multi-Embed Streaming Providers** (Vidsrc, Videasy, Vidking, 2Embed, AutoEmbed)

---

## 📁 Struktur Komponen Utama

```text
resources/js/
├── components/
│   └── streaming/
│       ├── Navbar.tsx             # Header navigasi & pencarian live TMDB
│       ├── HeroSpotlight.tsx      # Banner sorotan film utama (Hero Carousel)
│       ├── CategoryPillFilter.tsx # Filter pill genre & kategori
│       ├── MovieCard.tsx          # Kartu poster film dengan efek hover
│       ├── MovieRow.tsx           # Baris carousel kategori film
│       ├── Top10Row.tsx           # Baris Top 10 Hari Ini di Indonesia
│       ├── VideoPlayerModal.tsx   # Modal pemutar video multi-server
│       ├── MovieDetailModal.tsx   # Modal rincian detail film & episode
│       ├── StreamingSkeleton.tsx  # Animated loading skeleton screen
│       └── StreamingFooter.tsx    # Footer aplikasi streaming
├── lib/
│   ├── tmdbService.ts             # Service pemanggilan API TMDB Live
│   └── streambertApi.ts           # Service URL generator multi-server streaming
├── data/
│   └── movies.ts                  # Interface TypeScript (MediaItem & Episode)
└── pages/
    └── welcome.tsx                # Halaman utama aplikasi ZTV Stream
```

---

## 🚀 Panduan Instalasi & Memulai

### **Prasyarat System**
Pastikan perangkat Anda sudah terinstal:
- **PHP** `>= 8.2`
- **Composer** `>= 2.x`
- **Node.js** `>= 18.x` & **NPM**

### **Langkah-Langkah Setup Repository**

1. **Kloning Repository**
   ```bash
   git clone https://github.com/username/ztv-stream.git
   cd ztv-stream
   ```

2. **Instal Dependensi Backend (PHP)**
   ```bash
   composer install
   ```

3. **Instal Dependensi Frontend (Node.js)**
   ```bash
   npm install
   ```

4. **Konfigurasi Environment File**
   Salin file `.env.example` menjadi `.env`:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Jalankan Aplikasi Lokal**
   Buka 2 terminal terpisah atau jalankan perintah berikut:

   **Terminal 1 (Backend Server):**
   ```bash
   php artisan serve
   ```

   **Terminal 2 (Vite Frontend Compiler):**
   ```bash
   npm run dev
   ```

   Buka peramban (browser) dan akses alamat: `http://localhost:8000` atau `http://127.0.0.1:8000`.

---

## 📦 Menjalankan Build Produksi

Untuk mengompilasi aset frontend ke bundel produksi:

```bash
npm run build
```

---

## 📄 Lisensi

Proyek ini dirilis di bawah lisensi [MIT License](LICENSE).
