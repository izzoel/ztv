import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, Cookie, Shield, Lock, Check, Zap, Save, RefreshCw, Info } from 'lucide-react';
import StreamingFooter from '@/components/streaming/StreamingFooter';

export default function CookiesPage() {
    // Cookie preference state
    const [performanceCookies, setPerformanceCookies] = useState(true);
    const [functionalCookies, setFunctionalCookies] = useState(true);
    const [marketingCookies, setMarketingCookies] = useState(false);

    // Save notification banner state
    const [isSaved, setIsSaved] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const handleSavePreferences = () => {
        setIsSaving(true);
        setTimeout(() => {
            setIsSaving(false);
            setIsSaved(true);
            setTimeout(() => {
                setIsSaved(false);
            }, 4000);
        }, 500);
    };

    const handleAcceptAll = () => {
        setPerformanceCookies(true);
        setFunctionalCookies(true);
        setMarketingCookies(true);
        handleSavePreferences();
    };

    const handleRejectNonEssential = () => {
        setPerformanceCookies(false);
        setFunctionalCookies(false);
        setMarketingCookies(false);
        handleSavePreferences();
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-red-600 selection:text-white flex flex-col justify-between">
            <Head title="Preferensi Cookie - ZTV Stream" />

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
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 w-full space-y-8">
                {/* Save Toast Feedback */}
                {isSaved && (
                    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-emerald-600 text-white shadow-2xl shadow-emerald-600/40 border border-emerald-400/30 animate-in slide-in-from-bottom-5 duration-300">
                        <Check className="w-5 h-5 font-bold" />
                        <span className="text-sm font-bold">Preferensi cookie Anda berhasil disimpan!</span>
                    </div>
                )}

                {/* Hero Header */}
                <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-white/10 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-600/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                            <Cookie className="w-3.5 h-3.5" />
                            Pusat Kontrol Privasi Browser
                        </div>
                        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Pengaturan & Preferensi Cookie
                        </h1>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                            ZTV Stream menggunakan cookie dan teknologi serupa untuk mengingat sesi login Anda, mengoptimalkan pemutaran video, dan memberikan rekomendasi film yang relevan. Anda memiliki kontrol penuh atas jenis cookie yang diaktifkan.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                                onClick={handleAcceptAll}
                                className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs sm:text-sm font-bold transition shadow-lg shadow-red-600/30 cursor-pointer"
                            >
                                Terma Semua Cookie
                            </button>
                            <button
                                onClick={handleRejectNonEssential}
                                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 text-xs sm:text-sm font-medium border border-white/10 transition cursor-pointer"
                            >
                                Tolak Cookie Opsional
                            </button>
                        </div>
                    </div>
                </div>

                {/* Cookie Categories Toggles */}
                <div className="space-y-4">
                    <h2 className="text-lg font-bold text-white tracking-wide uppercase text-xs text-slate-400">
                        Kategori Cookie
                    </h2>

                    {/* 1. Essential Cookies (Locked) */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-slate-800 text-slate-300">
                                    <Lock className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                                        Cookie Esensial & Diperlukan
                                        <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-amber-500/20 text-amber-400 border border-amber-500/30">
                                            Selalu Aktif
                                        </span>
                                    </h3>
                                    <p className="text-xs text-slate-400">Wajib untuk fungsi dasar situs & otentikasi login pengguna.</p>
                                </div>
                            </div>
                            
                            {/* Static Toggle Locked */}
                            <div className="w-12 h-7 rounded-full bg-red-600/40 opacity-70 p-1 flex items-center justify-end cursor-not-allowed">
                                <div className="w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <Lock className="w-3 h-3 text-slate-900" />
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                            Cookie ini sangat penting agar aplikasi ZTV Stream dapat berjalan secara aman. Ini mencakup penyimpanan token autentikasi login, sesi aktif, serta preferensi bahasa.
                        </p>
                    </div>

                    {/* 2. Performance & Analytics Cookies */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-slate-800 text-cyan-400">
                                    <Zap className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">
                                        Cookie Performa & Analitik
                                    </h3>
                                    <p className="text-xs text-slate-400">Membantu meningkatkan kecepatan pemutaran video & pengujian sistem.</p>
                                </div>
                            </div>
                            
                            {/* Interactive Switch */}
                            <button
                                onClick={() => setPerformanceCookies(!performanceCookies)}
                                className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                                    performanceCookies ? 'bg-red-600' : 'bg-slate-800 border border-white/10'
                                }`}
                                aria-label="Toggle Performance Cookies"
                            >
                                <div
                                    className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                                        performanceCookies ? 'translate-x-5' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                            Cookie ini mengumpulkan data statistik anonim tentang bagaimana pengunjung bernavigasi di ZTV Stream, kecepatan pemuatan video 4K/FHD, serta mendeteksi pemutusan sambungan jaringan.
                        </p>
                    </div>

                    {/* 3. Functional Cookies */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-slate-800 text-emerald-400">
                                    <Shield className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">
                                        Cookie Fungsionalitas & Pengalaman
                                    </h3>
                                    <p className="text-xs text-slate-400">Menyimpan setelan volume video, subtitle, & progres tontonan.</p>
                                </div>
                            </div>
                            
                            {/* Interactive Switch */}
                            <button
                                onClick={() => setFunctionalCookies(!functionalCookies)}
                                className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                                    functionalCookies ? 'bg-red-600' : 'bg-slate-800 border border-white/10'
                                }`}
                                aria-label="Toggle Functional Cookies"
                            >
                                <div
                                    className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                                        functionalCookies ? 'translate-x-5' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                            Memungkinkan situs untuk mengingat pilihan kustomisasi yang Anda buat, seperti volume suara pemutar video, ukuran teks subtitle, dan film yang Anda simpan di Daftar Saya.
                        </p>
                    </div>

                    {/* 4. Marketing Cookies */}
                    <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10 space-y-3">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2.5 rounded-xl bg-slate-800 text-purple-400">
                                    <Cookie className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white">
                                        Cookie Pemasaran & Penargetan
                                    </h3>
                                    <p className="text-xs text-slate-400">Menampilkan promosi tayangan sinema yang relevan dengan minat Anda.</p>
                                </div>
                            </div>
                            
                            {/* Interactive Switch */}
                            <button
                                onClick={() => setMarketingCookies(!marketingCookies)}
                                className={`w-12 h-7 rounded-full p-1 transition-colors duration-200 ease-in-out cursor-pointer ${
                                    marketingCookies ? 'bg-red-600' : 'bg-slate-800 border border-white/10'
                                }`}
                                aria-label="Toggle Marketing Cookies"
                            >
                                <div
                                    className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-200 ease-in-out ${
                                        marketingCookies ? 'translate-x-5' : 'translate-x-0'
                                    }`}
                                />
                            </button>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                            Digunakan untuk menyajikan rekomendasi judul film terbaru atau promo perpanjangan langganan yang dipersonalisasi di platform atau saluran mitra resmi.
                        </p>
                    </div>
                </div>

                {/* Save Controls Footer Bar */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                        <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>Anda dapat mengubah preferensi cookie ini kapan saja dari menu footer ZTV Stream.</span>
                    </div>

                    <button
                        onClick={handleSavePreferences}
                        disabled={isSaving}
                        className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                        {isSaving ? (
                            <>
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                <span>Menyimpan...</span>
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4" />
                                <span>Simpan Preferensi Cookie</span>
                            </>
                        )}
                    </button>
                </div>
            </main>

            <StreamingFooter />
        </div>
    );
}
