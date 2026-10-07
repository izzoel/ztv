import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, Share2, UserCheck, Clock, CheckCircle2 } from 'lucide-react';
import StreamingFooter from '@/components/streaming/StreamingFooter';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
            <Head title="Kebijakan Privasi - ZTV Stream" />

            {/* Header Navigation */}
            <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-8 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-500 shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-300">
                            <span className="font-black text-white text-xl tracking-wider">Z</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-xl tracking-tighter text-white">
                                ZTV <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-red-600/30 border border-red-500/50 text-red-400">STREAM</span>
                            </span>
                        </div>
                    </Link>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Kembali ke Beranda</span>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 w-full space-y-10">
                {/* Hero Banner Header */}
                <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-white/10 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            Perlindungan Data Pribadi
                        </div>
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Kebijakan Privasi
                        </h1>
                        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                            Di ZTV Stream, kami sangat menghargai dan berkomitmen penuh untuk melindungi privasi serta keamanan informasi pribadi pengguna kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-white/5">
                            <span className="flex items-center gap-1.5 font-mono">
                                <Clock className="w-3.5 h-3.5 text-slate-500" /> Terakhir diperbarui: 7 Oktober 2026
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 font-mono text-emerald-400">
                                <Lock className="w-3.5 h-3.5" /> Enkripsi Kriptografi SSL 256-bit
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Quick Navigation Sidebar */}
                    <div className="md:col-span-1 hidden md:block sticky top-24 h-fit space-y-2 text-xs">
                        <p className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-3">Daftar Isi</p>
                        <a href="#pengumpulan" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">1. Informasi yang Dikuci</a>
                        <a href="#penggunaan" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">2. Penggunaan Informasi</a>
                        <a href="#keamanan" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">3. Keamanan Data</a>
                        <a href="#berbagi" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">4. Pembagian Data III</a>
                        <a href="#hak" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">5. Hak-Hak Pengguna</a>
                    </div>

                    {/* Legal Body */}
                    <div className="md:col-span-3 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {/* Section 1 */}
                        <section id="pengumpulan" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">
                                    <Database className="w-4 h-4" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">1. Informasi yang Kami Kumpulkan</h2>
                            </div>
                            <p>
                                Kami mengumpulkan beberapa kategori informasi untuk menyediakan dan meningkatkan pengalaman pemutaran streaming film yang lancar:
                            </p>
                            <ul className="space-y-2.5 text-slate-300">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                    <span><strong>Informasi Akun:</strong> Nama, alamat email, kata sandi terenkripsi, dan preferensi profil pengguna.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                    <span><strong>Aktivitas Streaming:</strong> Riwayat film yang ditonton, durasi pemutaran, bookmark Daftar Saya, serta pencarian judul film.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                                    <span><strong>Informasi Perangkat:</strong> Jenis browser, alamat IP, jenis sistem operasi, resolusi layar, serta log kesalahan koneksi streaming.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section id="penggunaan" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">
                                    <Eye className="w-4 h-4" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">2. Cara Kami Menggunakan Informasi</h2>
                            </div>
                            <p>Informasi yang dikumpulkan digunakan semata-mata untuk tujuan operasional berikut:</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                                <li>Menyajikan rekomendasi film dan serial yang dipersonalisasi sesuai minat Anda.</li>
                                <li>Menyimpan progres pemutaran film terakhir agar dapat dilanjutkan di berbagai perangkat.</li>
                                <li>Mengirimkan notifikasi rilis film terbaru atau episode baru serial favorit Anda.</li>
                                <li>Menganalisis performa server dan mencegah tindakan kecurangan atau penyalahgunaan akun.</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section id="keamanan" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 font-bold flex items-center justify-center shrink-0">
                                    <Lock className="w-4 h-4" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">3. Keamanan & Enkripsi Data</h2>
                            </div>
                            <p>
                                Kami mengimplementasikan standar keamanan industri tingkat tinggi, termasuk enkripsi Transport Layer Security (TLS/SSL) untuk seluruh lalu lintas data antara perangkat Anda dan server ZTV Stream.
                            </p>
                            <p>
                                Kata sandi akun disimpan menggunakan algoritma hashing kuat yang tak dapat dibalikkan (Bcrypt), sehingga tidak ada staf ZTV Stream yang dapat membaca kata sandi mentah Anda.
                            </p>
                        </section>

                        {/* Section 4 */}
                        <section id="berbagi" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 font-bold flex items-center justify-center shrink-0">
                                    <Share2 className="w-4 h-4" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">4. Pembagian Informasi ke Pihak Ketiga</h2>
                            </div>
                            <p>
                                ZTV Stream <strong>TIDAK PERNAH</strong> menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak mana pun untuk keperluan pemasaran tanpa izin langsung dari Anda.
                            </p>
                            <p>
                                Data hanya dapat dibagikan kepada penyedia layanan terpercaya (seperti penyedia CDN streaming video atau gateway pembayaran resmi) secara terbatas demi menunjang operasional aplikasi.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section id="hak" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 font-bold flex items-center justify-center shrink-0">
                                    <UserCheck className="w-4 h-4" />
                                </div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">5. Hak-Hak Privasi Anda</h2>
                            </div>
                            <p>Sebagai pengguna, Anda memiliki hak penuh untuk:</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                                <li>Mengakses dan memperbarui profil pribadi Anda kapan saja melalui Pengaturan Akun.</li>
                                <li>Menghapus seluruh riwayat tontonan atau mengajukan penghapusan permanen akun Anda.</li>
                                <li>Mengatur dan mengubah preferensi pelacakan cookie pada halaman Preferensi Cookie.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>

            <StreamingFooter />
        </div>
    );
}
