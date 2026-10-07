import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, FileText, ShieldCheck, Scale, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import StreamingFooter from '@/components/streaming/StreamingFooter';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
            <Head title="Syarat & Ketentuan Layanan - ZTV Stream" />

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
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
                            <FileText className="w-3.5 h-3.5" />
                            Dokumen Legal Resmi
                        </div>
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Syarat & Ketentuan Layanan
                        </h1>
                        <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                            Harap baca Syarat dan Ketentuan ini secara saksama sebelum menggunakan platform streaming ZTV Stream. Ketentuan ini mengatur hak dan kewajiban Anda saat menggunakan layanan kami.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-white/5">
                            <span className="flex items-center gap-1.5 font-mono">
                                <Clock className="w-3.5 h-3.5 text-slate-500" /> Terakhir diperbarui: 7 Oktober 2026
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1.5 font-mono">
                                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Berlaku Efektif Seluruh Wilayah
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Quick Navigation Sidebar */}
                    <div className="md:col-span-1 hidden md:block sticky top-24 h-fit space-y-2 text-xs">
                        <p className="font-bold text-slate-400 uppercase tracking-wider text-[11px] mb-3">Daftar Isi</p>
                        <a href="#pendahuluan" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">1. Penerimaan Ketentuan</a>
                        <a href="#akun" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">2. Akun & Keanggotaan</a>
                        <a href="#streaming" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">3. Streaming & Lisensi</a>
                        <a href="#pembayaran" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">4. Langganan & Tagihan</a>
                        <a href="#larangan" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">5. Batasan & Larangan</a>
                        <a href="#hakcipta" className="block px-3 py-2 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition">6. Hak Kekayaan Intelektual</a>
                    </div>

                    {/* Legal Body */}
                    <div className="md:col-span-3 space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
                        {/* Section 1 */}
                        <section id="pendahuluan" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-red-600/20 text-red-400 font-bold flex items-center justify-center shrink-0">1</div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">Penerimaan Ketentuan Layanan</h2>
                            </div>
                            <p>
                                Dengan mengakses, mendaftar, atau menggunakan platform ZTV Stream, Anda menyatakan setuju untuk terikat oleh Syarat dan Ketentuan Layanan ini, Kebijakan Privasi kami, serta aturan operasional lain yang dipublikasikan oleh ZTV Stream.
                            </p>
                            <p>
                                Jika Anda tidak menyetujui salah satu bagian dari ketentuan ini, Anda tidak diperkenankan untuk mengakses atau menggunakan layanan ZTV Stream dalam bentuk apa pun.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section id="akun" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-rose-600/20 text-rose-400 font-bold flex items-center justify-center shrink-0">2</div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">Akun dan Kelayakan Keanggotaan</h2>
                            </div>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Batas Usia:</strong> Anda harus berusia sekurang-kurangnya 18 tahun atau telah memiliki kewenangan hukum yang sah untuk menggunakan layanan ini.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Keamanan Akun:</strong> Anda bertanggung jawab penuh untuk menjaga kerahasiaan kata sandi dan seluruh aktivitas yang terjadi di dalam akun Anda.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Akurasi Data:</strong> Anda wajib memberikan informasi pendaftaran yang akurat, terkini, dan lengkap.</span>
                                </li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section id="streaming" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-amber-600/20 text-amber-400 font-bold flex items-center justify-center shrink-0">3</div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">Streaming dan Lisensi Konten</h2>
                            </div>
                            <p>
                                ZTV Stream memberikan Anda lisensi terbatas, non-eksklusif, dan tidak dapat dipindahtangankan untuk mengakses konten multimedia (film, serial TV, trailer) secara streaming pribadi untuk tujuan non-komersial.
                            </p>
                            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs sm:text-sm space-y-1">
                                <p className="font-bold flex items-center gap-1.5">
                                    <AlertCircle className="w-4 h-4 text-amber-400" /> Catatan Kualitas Video:
                                </p>
                                <p className="text-slate-300">
                                    Kualitas penayangan konten (4K UHD, Full HD, SD) bergantung pada perangkat yang Anda gunakan, serta kecepatan koneksi internet yang tersedia saat pemutaran.
                                </p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section id="pembayaran" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-cyan-600/20 text-cyan-400 font-bold flex items-center justify-center shrink-0">4</div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">Langganan, Pembayaran & Pembatalan</h2>
                            </div>
                            <p>
                                Beberapa fitur ZTV Stream memerlukan pembayaran paket langganan. Biaya langganan dibayarkan di muka dan diperpanjang secara otomatis sesuai dengan periode paket yang Anda pilih.
                            </p>
                            <p>
                                Anda dapat membatalkan paket langganan kapan saja melalui menu Pengaturan Akun. Pembatalan akan berlaku pada akhir periode penagihan berjalan tanpa pengembalian dana parsial.
                            </p>
                        </section>

                        {/* Section 5 */}
                        <section id="larangan" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-purple-600/20 text-purple-400 font-bold flex items-center justify-center shrink-0">5</div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">Batasan Penggunaan & Larangan</h2>
                            </div>
                            <p>Pengguna secara tegas dilarang untuk:</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 pl-2">
                                <li>Merekam, mengunduh, menggandakan, atau mendistribusikan ulang materi video tanpa izin tertulis dari ZTV Stream.</li>
                                <li>Menggunakan VPN, proxy, atau teknologi lain untuk mengeluh pembatasan lokasi geografis lisensi konten.</li>
                                <li>Melakukan peretasan, reverse engineering, atau mencoba merusak infrastruktur keamanan sistem.</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section id="hakcipta" className="space-y-4 p-6 rounded-2xl bg-slate-900/50 border border-white/5">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">6</div>
                                <h2 className="text-lg sm:text-xl font-bold text-white">Hak Kekayaan Intelektual</h2>
                            </div>
                            <p>
                                Seluruh hak cipta, merek dagang, desain, dan hak kekayaan intelektual atas logo ZTV Stream, antarmuka pengguna, dan katalog sinema merupakan milik sah ZTV Stream atau pemegang lisensi terkait.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <StreamingFooter />
        </div>
    );
}
