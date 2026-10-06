import { Tv, Smartphone, Monitor, Gamepad2, ShieldCheck, Heart } from 'lucide-react';

export default function StreamingFooter() {
    return (
        <footer className="mt-20 border-t border-white/10 bg-slate-950 text-slate-400 text-xs py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Available Devices Section */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold">
                            ZTV
                        </div>
                        <div>
                            <h4 className="text-sm font-bold text-white">Tonton di Mana Saja, Kapan Saja</h4>
                            <p className="text-xs text-slate-400">Tersedia di Smart TV, Ponsel, Tablet, Laptop, dan Konsol Game.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-slate-300">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <Tv className="w-4 h-4 text-red-400" />
                            <span>Smart TV</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <Smartphone className="w-4 h-4 text-cyan-400" />
                            <span>Mobile App</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <Monitor className="w-4 h-4 text-emerald-400" />
                            <span>Web Browser</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                            <Gamepad2 className="w-4 h-4 text-amber-400" />
                            <span>Console</span>
                        </div>
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                    <div className="space-y-2">
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">Navigasi</h5>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="hover:text-white transition">Beranda</a></li>
                            <li><a href="#" className="hover:text-white transition">Film Terbaru</a></li>
                            <li><a href="#" className="hover:text-white transition">Serial TV Populer</a></li>
                            <li><a href="#" className="hover:text-white transition">ZTV Originals</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">Bantuan & Dukungan</h5>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="hover:text-white transition">Pusat Bantuan</a></li>
                            <li><a href="#" className="hover:text-white transition">Pertanyaan Umum (FAQ)</a></li>
                            <li><a href="#" className="hover:text-white transition">Tes Kecepatan Streaming</a></li>
                            <li><a href="#" className="hover:text-white transition">Kontak Media</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">Ketentuan & Privasi</h5>
                        <ul className="space-y-1.5">
                            <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan Layanan</a></li>
                            <li><a href="#" className="hover:text-white transition">Kebijakan Privasi</a></li>
                            <li><a href="#" className="hover:text-white transition">Preferensi Cookie</a></li>
                            <li><a href="#" className="hover:text-white transition">Informasi Perusahaan</a></li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">Bahasa & Wilayah</h5>
                        <select className="bg-slate-900 border border-white/20 text-white rounded-xl px-3 py-1.5 text-xs focus:outline-none w-full">
                            <option>🇮🇩 Bahasa Indonesia</option>
                            <option>🇺🇸 English (US)</option>
                        </select>
                        <p className="text-[11px] text-slate-500 pt-2">
                            ZTV Stream Indonesia © 2026. Seluruh hak cipta dilindungi undang-undang.
                        </p>
                    </div>
                </div>

                {/* Bottom Disclaimer */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span>Koneksi Enkripsi SSL 256-bit Terproteksi</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Didesain dengan</span>
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
                        <span>untuk Penggemar Sinema Indonesia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
