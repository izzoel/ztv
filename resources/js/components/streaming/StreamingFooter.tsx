import { Tv, Smartphone, Monitor, Gamepad2, ShieldCheck, Heart } from 'lucide-react';
import { Link } from '@inertiajs/react';

export default function StreamingFooter() {
    return (
        <footer className="mt-16 sm:mt-20 border-t border-white/10 bg-slate-950 text-slate-400 text-xs py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Available Devices Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-950 border border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 text-red-500 flex items-center justify-center font-black text-sm shrink-0">
                            ZTV
                        </div>
                        <div>
                            <h4 className="text-sm sm:text-base font-bold text-white">Tonton di Mana Saja, Kapan Saja</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">Tersedia di Smart TV, Ponsel, Tablet, Laptop, dan Konsol Game.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 text-slate-300 w-full lg:w-auto">
                        <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 sm:py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium w-full sm:w-auto">
                            <Tv className="w-4 h-4 text-red-400 shrink-0" />
                            <span>Smart TV</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 sm:py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium w-full sm:w-auto">
                            <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span>Mobile App</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 sm:py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium w-full sm:w-auto">
                            <Monitor className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Web Browser</span>
                        </div>
                        <div className="flex items-center justify-center sm:justify-start gap-2 px-3 py-2 sm:py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-medium w-full sm:w-auto">
                            <Gamepad2 className="w-4 h-4 text-amber-400 shrink-0" />
                            <span>Console</span>
                        </div>
                    </div>
                </div>

                {/* Footer Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 pt-2">
                    <div className="space-y-2.5">
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">Ketentuan & Privasi</h5>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link href="/terms" className="hover:text-white transition">Syarat & Ketentuan Layanan</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition">Kebijakan Privasi</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition">Preferensi Cookie</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-2.5">
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">Bahasa & Wilayah</h5>
                        <select className="bg-slate-900 border border-white/20 text-white rounded-xl px-3 py-2 text-xs focus:outline-none w-full sm:w-64 cursor-pointer">
                            <option>🇮🇩 Bahasa Indonesia</option>
                            <option>🇺🇸 English (US)</option>
                        </select>
                        <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                            ZTV Stream Indonesia © 2026. Seluruh hak cipta dilindungi undang-undang.
                        </p>
                    </div>
                </div>

                {/* Bottom Disclaimer */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-[11px] text-slate-500">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Koneksi Enkripsi SSL 256-bit Terproteksi</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>Didesain dengan</span>
                        <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline mx-0.5" />
                        <span>untuk Penggemar Sinema Indonesia</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
