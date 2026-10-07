import { Tv, Smartphone, Monitor, Gamepad2, Globe, ChevronDown } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useLanguage, Language } from '@/lib/i18n';

export default function StreamingFooter() {
    const { language, setLanguage, t } = useLanguage();

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
                            <h4 className="text-sm sm:text-base font-bold text-white">{t('footer_devices_title')}</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">{t('footer_devices_desc')}</p>
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
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">{t('footer_terms_title')}</h5>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link href="/terms" className="hover:text-white transition">{t('footer_terms_link')}</Link></li>
                            <li><Link href="/privacy" className="hover:text-white transition">{t('footer_privacy_link')}</Link></li>
                            <li><Link href="/cookies" className="hover:text-white transition">{t('footer_cookie_link')}</Link></li>
                        </ul>
                    </div>
                    <div className="space-y-2.5">
                        <h5 className="font-bold text-white uppercase text-[11px] tracking-wider">{t('footer_lang_title')}</h5>
                        <div className="relative w-full sm:w-64">
                            <select 
                                value={language}
                                onChange={(e) => setLanguage(e.target.value as Language)}
                                className="appearance-none bg-slate-900/90 border border-white/20 hover:border-red-500/50 text-white rounded-xl pl-9 pr-8 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-red-500/40 w-full cursor-pointer transition-all shadow-lg font-medium"
                            >
                                <option value="id" className="bg-slate-900 text-white py-1">🇮🇩 Bahasa Indonesia</option>
                                <option value="en" className="bg-slate-900 text-white py-1">🇺🇸 English (US)</option>
                            </select>
                            <Globe className="w-4 h-4 text-red-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                        <p className="text-[11px] text-slate-500 pt-2 leading-relaxed">
                            {t('footer_copyright')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
