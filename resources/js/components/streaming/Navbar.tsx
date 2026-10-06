import { useState, useEffect } from 'react';
import { Search, Bell, Bookmark, User, Film, Tv, Sparkles, LogOut, Settings, ChevronDown, X } from 'lucide-react';
import { Link, usePage } from '@inertiajs/react';
import { MediaItem, ALL_MEDIA } from '@/data/movies';

interface NavbarProps {
    activeCategory: string;
    onSelectCategory: (category: string) => void;
    onPlayMedia: (media: MediaItem) => void;
    onOpenDetail: (media: MediaItem) => void;
    myListCount: number;
    showMyListOnly: boolean;
    onToggleMyListOnly: (show: boolean) => void;
}

export default function Navbar({
    activeCategory,
    onSelectCategory,
    onPlayMedia,
    onOpenDetail,
    myListCount,
    showMyListOnly,
    onToggleMyListOnly
}: NavbarProps) {
    const { auth } = usePage().props as any;
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchResults, setSearchResults] = useState<MediaItem[]>([]);
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let isCancelled = false;
        if (searchQuery.trim().length > 1) {
            const query = searchQuery.toLowerCase();
            const localFiltered = ALL_MEDIA.filter(
                (m) =>
                    m.title.toLowerCase().includes(query) ||
                    m.genres.some((g) => g.toLowerCase().includes(query)) ||
                    m.cast.some((c) => c.toLowerCase().includes(query))
            );

            import('@/lib/tmdbService').then(({ searchTmdbContent }) => {
                searchTmdbContent(searchQuery).then((remoteResults) => {
                    if (!isCancelled) {
                        const combined = [...remoteResults, ...localFiltered];
                        const uniqueMap = new Map();
                        combined.forEach((item) => uniqueMap.set(item.id, item));
                        setSearchResults(Array.from(uniqueMap.values()));
                    }
                });
            });
        } else {
            setSearchResults([]);
        }

        return () => {
            isCancelled = true;
        };
    }, [searchQuery]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
                isScrolled
                    ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
                    : 'bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-5'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
                {/* Left side: Brand Logo & Navigation */}
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => {
                            onSelectCategory('Semua');
                            onToggleMyListOnly(false);
                        }}
                        className="flex items-center gap-2 group text-left cursor-pointer"
                    >
                        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-rose-600 to-amber-500 shadow-lg shadow-red-600/30 group-hover:scale-105 transition-transform duration-300">
                            <span className="font-black text-white text-xl tracking-wider">Z</span>
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping opacity-75" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-2xl tracking-tighter text-white drop-shadow-sm flex items-center gap-1">
                                ZTV <span className="text-xs font-semibold px-1.5 py-0.5 rounded bg-red-600/30 border border-red-500/50 text-red-400">STREAM</span>
                            </span>
                            <span className="text-[10px] text-slate-400 -mt-1 font-medium tracking-widest uppercase">Premium Cinema</span>
                        </div>
                    </button>

                    {/* Primary Links */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                        <button
                            onClick={() => {
                                onSelectCategory('Semua');
                                onToggleMyListOnly(false);
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                                activeCategory === 'Semua' && !showMyListOnly
                                    ? 'bg-white text-slate-950 shadow-md font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            Beranda
                        </button>
                        <button
                            onClick={() => {
                                onSelectCategory('Film');
                                onToggleMyListOnly(false);
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                                activeCategory === 'Film' && !showMyListOnly
                                    ? 'bg-white text-slate-950 shadow-md font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            <Film className="w-3.5 h-3.5" />
                            Film
                        </button>
                        <button
                            onClick={() => {
                                onSelectCategory('Serial TV');
                                onToggleMyListOnly(false);
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                                activeCategory === 'Serial TV' && !showMyListOnly
                                    ? 'bg-white text-slate-950 shadow-md font-semibold'
                                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            <Tv className="w-3.5 h-3.5" />
                            Serial TV
                        </button>
                        <button
                            onClick={() => onToggleMyListOnly(true)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                                showMyListOnly
                                    ? 'bg-amber-500 text-slate-950 font-semibold shadow-md'
                                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                            }`}
                        >
                            <Bookmark className="w-3.5 h-3.5" />
                            Daftar Saya
                            {myListCount > 0 && (
                                <span className="ml-1 px-1.5 py-0.2 text-[10px] bg-red-600 text-white rounded-full font-bold">
                                    {myListCount}
                                </span>
                            )}
                        </button>
                    </nav>
                </div>

                {/* Right side: Search, Notifications, Profile */}
                <div className="flex items-center gap-3">
                    {/* Search Bar */}
                    <div className="relative">
                        {isSearchOpen ? (
                            <div className="flex items-center bg-slate-900/90 border border-white/20 rounded-full px-3 py-1.5 w-48 sm:w-64 md:w-80 shadow-xl transition-all">
                                <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Cari film, serial, aktor..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    className="bg-transparent text-sm text-white focus:outline-none w-full placeholder:text-slate-400"
                                />
                                <button
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                        setSearchQuery('');
                                    }}
                                    className="text-slate-400 hover:text-white ml-1 p-0.5 rounded-full"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        ) : (
                            <button
                                onClick={() => setIsSearchOpen(true)}
                                className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
                                title="Cari Film"
                            >
                                <Search className="w-5 h-5" />
                            </button>
                        )}

                        {/* Search Autocomplete Results Overlay */}
                        {isSearchOpen && searchResults.length > 0 && (
                            <div className="absolute top-12 right-0 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 z-50 max-h-96 overflow-y-auto divide-y divide-white/5">
                                <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                    Hasil Pencarian ({searchResults.length})
                                </div>
                                {searchResults.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => {
                                            onOpenDetail(item);
                                            setIsSearchOpen(false);
                                        }}
                                        className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-xl cursor-pointer transition"
                                    >
                                        <img
                                            src={item.posterUrl}
                                            alt={item.title}
                                            className="w-12 h-16 object-cover rounded-lg shrink-0 border border-white/10"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-sm font-semibold text-white truncate">{item.title}</h4>
                                            <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                                                <span className="text-amber-400 font-medium">★ {item.rating}</span>
                                                <span>•</span>
                                                <span>{item.year}</span>
                                                <span>•</span>
                                                <span className="text-slate-300">{item.genres[0]}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onPlayMedia(item);
                                                setIsSearchOpen(false);
                                            }}
                                            className="p-2 bg-red-600 hover:bg-red-500 text-white rounded-full shrink-0 transition"
                                        >
                                            <Film className="w-4 h-4" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Notification Bell */}
                    <div className="relative">
                        <button
                            onClick={() => setShowNotifications(!showNotifications)}
                            className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition relative"
                            title="Notifikasi"
                        >
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-slate-950" />
                        </button>

                        {showNotifications && (
                            <div className="absolute top-12 right-0 w-80 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-4 z-50 text-slate-200 text-sm">
                                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                                    <span className="font-semibold text-white">Notifikasi Rilis Baru</span>
                                    <span className="text-xs text-slate-400">Baru Saja</span>
                                </div>
                                <div className="mt-3 space-y-3">
                                    <div className="flex items-start gap-3">
                                        <span className="p-1.5 bg-red-600/30 text-red-400 rounded-lg text-xs font-bold shrink-0">NEW</span>
                                        <div>
                                            <p className="text-xs font-medium text-white">Garuda: Bangkitnya Santakala (2026)</p>
                                            <p className="text-[11px] text-slate-400">Episode baru ZTV Original sekarang tersedia dalam 4K HDR.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="p-1.5 bg-cyan-600/30 text-cyan-400 rounded-lg text-xs font-bold shrink-0">POPULER</span>
                                        <div>
                                            <p className="text-xs font-medium text-white">Nightmare in Nanting Ep.3</p>
                                            <p className="text-[11px] text-slate-400">Trending #1 di Indonesia hari ini!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* User Profile */}
                    <div className="relative">
                        {auth?.user ? (
                            <button
                                onClick={() => setShowProfileMenu(!showProfileMenu)}
                                className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition"
                            >
                                <img
                                    src={`https://api.dicebear.com/7.x/bottts/svg?seed=${auth.user.name || 'User'}`}
                                    alt="Avatar"
                                    className="w-8 h-8 rounded-full border-2 border-red-500 bg-slate-800"
                                />
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
                            </button>
                        ) : (
                            <Link
                                href="/login"
                                className="px-4 py-1.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-medium text-sm shadow-lg shadow-red-600/30 transition-all flex items-center gap-1.5"
                            >
                                <User className="w-4 h-4" />
                                Masuk
                            </Link>
                        )}

                        {showProfileMenu && auth?.user && (
                            <div className="absolute top-12 right-0 w-56 bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-2 z-50">
                                <div className="px-3 py-2 border-b border-white/10">
                                    <p className="text-sm font-semibold text-white truncate">{auth.user.name}</p>
                                    <p className="text-xs text-slate-400 truncate">{auth.user.email}</p>
                                </div>
                                <div className="py-1 space-y-0.5">
                                    <Link
                                        href="/dashboard"
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition"
                                    >
                                        <User className="w-4 h-4 text-slate-400" />
                                        Dashboard Pengguna
                                    </Link>
                                    <Link
                                        href="/settings/profile"
                                        className="flex items-center gap-2 px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-xl transition"
                                    >
                                        <Settings className="w-4 h-4 text-slate-400" />
                                        Pengaturan Akun
                                    </Link>
                                </div>
                                <div className="pt-1 border-t border-white/10">
                                    <Link
                                        href="/logout"
                                        method="post"
                                        as="button"
                                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-950/30 rounded-xl transition text-left"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Keluar
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Sub-navigation category pills for mobile */}
            <div className="flex md:hidden items-center gap-2 overflow-x-auto px-4 mt-3 pb-1 no-scrollbar">
                {['Semua', 'Film', 'Serial TV'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            onSelectCategory(cat);
                            onToggleMyListOnly(false);
                        }}
                        className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 transition-all ${
                            activeCategory === cat && !showMyListOnly
                                ? 'bg-red-600 text-white font-semibold'
                                : 'bg-white/10 text-slate-300 hover:bg-white/20'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </header>
    );
}
