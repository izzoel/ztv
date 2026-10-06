import { useState, useRef, useEffect } from 'react';
import { 
    Play, Pause, RotateCcw, RotateCw, Volume2, VolumeX, Maximize, X, 
    MessageSquare, Sparkles, Server, Tv, Search, Layers, RefreshCw, AlertCircle, Film
} from 'lucide-react';
import { MediaItem } from '@/data/movies';
import { PLAYER_SOURCES, getSourceUrl, getTmdbIdForMedia } from '@/lib/streambertApi';

interface VideoPlayerModalProps {
    item: MediaItem | null;
    onClose: () => void;
}

export default function VideoPlayerModal({ item, onClose }: VideoPlayerModalProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const frameContainerRef = useRef<HTMLDivElement>(null);

    // Streambert Engine State
    const [selectedSource, setSelectedSource] = useState<string>('vidsrc');
    const [useStreambertEmbed, setUseStreambertEmbed] = useState<boolean>(true);
    const [currentTmdbId, setCurrentTmdbId] = useState<string | number>('');
    const [selectedSeason, setSelectedSeason] = useState<number>(1);
    const [selectedEpisode, setSelectedEpisode] = useState<number>(1);
    const [iframeLoading, setIframeLoading] = useState<boolean>(true);
    const [showSourceMenu, setShowSourceMenu] = useState<boolean>(false);
    const [showTmdbModal, setShowTmdbModal] = useState<boolean>(false);
    const [customTmdbInput, setCustomTmdbInput] = useState<string>('');

    // HTML5 Video State (Fallback)
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [volume, setVolume] = useState<number>(0.9);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [selectedSubtitles, setSelectedSubtitles] = useState<string>('id');
    const [showSubtitleMenu, setShowSubtitleMenu] = useState<boolean>(false);
    const [showEpisodeMenu, setShowEpisodeMenu] = useState<boolean>(false);

    // Initialize item data & TMDB ID
    useEffect(() => {
        if (item) {
            const tmdb = getTmdbIdForMedia(item.id, item.tmdbId);
            setCurrentTmdbId(tmdb);
            setCustomTmdbInput(String(tmdb));
            setIframeLoading(true);
        }
    }, [item]);

    // Safety timeout timer for iframe server loading
    useEffect(() => {
        if (iframeLoading) {
            const timer = setTimeout(() => {
                setIframeLoading(false);
            }, 7000);
            return () => clearTimeout(timer);
        }
    }, [iframeLoading, selectedSource, selectedSeason, selectedEpisode, currentTmdbId]);

    // Global Hotkeys
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === ' ') {
                e.preventDefault();
                togglePlay();
            }
            if (e.key.toLowerCase() === 'f') {
                toggleFullscreen();
            }
            if (e.key.toLowerCase() === 'm') {
                toggleMute();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isPlaying, isMuted]);

    if (!item) return null;

    const streamUrl = getSourceUrl(
        selectedSource,
        item.type,
        currentTmdbId || 27205,
        selectedSeason,
        selectedEpisode,
        'e50914',
        selectedSubtitles
    );

    const activeSourceObj = PLAYER_SOURCES.find((s) => s.id === selectedSource) || PLAYER_SOURCES[0];

    const togglePlay = () => {
        if (!useStreambertEmbed && videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
            setDuration(videoRef.current.duration || 0);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        setCurrentTime(time);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
        }
    };

    const skipTime = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseFloat(e.target.value);
        setVolume(val);
        if (videoRef.current) {
            videoRef.current.volume = val;
            setIsMuted(val === 0);
        }
    };

    const toggleFullscreen = () => {
        if (frameContainerRef.current) {
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                frameContainerRef.current.requestFullscreen().catch(() => {});
            }
        }
    };

    const formatTime = (seconds: number) => {
        if (isNaN(seconds)) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleApplyCustomTmdb = (e: React.FormEvent) => {
        e.preventDefault();
        if (customTmdbInput.trim()) {
            setCurrentTmdbId(customTmdbInput.trim());
            setIframeLoading(true);
            setShowTmdbModal(false);
        }
    };

    return (
        <div 
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto select-none animate-in fade-in duration-200 cursor-pointer"
        >
            {/* FRAMED MODAL CONTAINER (BINGKAI PEMUTAR VIDEO) */}
            <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl bg-slate-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col my-auto border-red-500/20 cursor-default"
            >
                
                {/* 1. BINGKAI HEADER (HEADER DI ATAS VIDEO) */}
                <div className="p-4 sm:p-5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-xl bg-red-600/20 text-red-500 shrink-0">
                            <Film className="w-5 h-5" />
                        </div>

                        <div className="min-w-0">
                            <div className="flex items-center gap-2">
                                <h2 className="text-base sm:text-lg font-extrabold text-white truncate">
                                    {item.title}
                                </h2>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-slate-300">
                                <span className="text-emerald-400 font-semibold">{useStreambertEmbed ? activeSourceObj.label : 'Local MP4'}</span>
                                <span>•</span>
                                {item.type === 'series' && (
                                    <span className="text-red-400 font-mono font-bold">
                                        S{selectedSeason} : E{selectedEpisode}
                                    </span>
                                )}
                                <span className="hidden sm:inline">•</span>
                                <span className="hidden sm:inline text-slate-400">{item.genres.join(', ')}</span>
                            </div>
                        </div>
                    </div>

                    {/* HEADER CONTROL BUTTONS (DI ATAS BINGKAI) */}
                    <div className="flex items-center gap-2 shrink-0">
                        {/* SERVER SELECTOR BUTTON */}
                        <div className="relative">
                            <button
                                onClick={() => {
                                    setShowSourceMenu(!showSourceMenu);
                                    setShowSubtitleMenu(false);
                                    setShowEpisodeMenu(false);
                                }}
                                className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-red-600/30 transition cursor-pointer"
                            >
                                <Server className="w-3.5 h-3.5" />
                                <span className="hidden sm:inline">Server:</span> {activeSourceObj.label}
                            </button>

                            {/* SERVER DROPDOWN */}
                            {showSourceMenu && (
                                <div className="absolute top-11 right-0 w-72 bg-slate-950 border border-white/20 rounded-2xl p-3 shadow-2xl z-40 text-xs space-y-2 backdrop-blur-2xl">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                        <span className="font-bold text-white flex items-center gap-1.5">
                                            <Layers className="w-4 h-4 text-red-500" />
                                            Pilih Server Streaming
                                        </span>
                                    </div>

                                    <div className="space-y-1 max-h-60 overflow-y-auto pr-1">
                                        {PLAYER_SOURCES.map((src) => (
                                            <button
                                                key={src.id}
                                                onClick={() => {
                                                    setSelectedSource(src.id);
                                                    setUseStreambertEmbed(true);
                                                    setIframeLoading(true);
                                                    setShowSourceMenu(false);
                                                }}
                                                className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between ${
                                                    useStreambertEmbed && selectedSource === src.id
                                                        ? 'bg-red-600 text-white font-bold shadow-md'
                                                        : 'text-slate-300 hover:bg-white/10'
                                                }`}
                                            >
                                                <div>
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="font-bold">{src.label}</span>
                                                        {src.tag && (
                                                            <span className="px-1.5 py-0.2 rounded bg-white/20 text-[10px] font-semibold text-amber-300">
                                                                {src.tag}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-[10px] text-slate-300 line-clamp-1">{src.description}</p>
                                                </div>
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => {
                                                setUseStreambertEmbed(false);
                                                setShowSourceMenu(false);
                                            }}
                                            className={`w-full text-left p-2.5 rounded-xl transition flex items-center justify-between ${
                                                !useStreambertEmbed
                                                    ? 'bg-emerald-600 text-white font-bold'
                                                    : 'text-slate-300 hover:bg-white/10'
                                            }`}
                                        >
                                            <div>
                                                <span className="font-bold block">Local Sample MP4</span>
                                                <p className="text-[10px] text-slate-300">Pemutar video HTML5 bawaan</p>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* SERIAL TV EPISODE SELECTOR IN HEADER */}
                        {item.type === 'series' && (
                            <div className="relative">
                                <button
                                    onClick={() => {
                                        setShowEpisodeMenu(!showEpisodeMenu);
                                        setShowSourceMenu(false);
                                        setShowSubtitleMenu(false);
                                    }}
                                    className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
                                >
                                    <Tv className="w-3.5 h-3.5 text-red-500" />
                                    <span>S{selectedSeason} E{selectedEpisode}</span>
                                </button>

                                {showEpisodeMenu && (
                                    <div className="absolute top-11 right-0 w-64 bg-slate-950 border border-white/20 rounded-2xl p-3 shadow-2xl z-40 text-xs space-y-2 backdrop-blur-2xl">
                                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                                            <span className="font-bold text-white">Pilih Musim & Episode</span>
                                        </div>

                                        <div className="space-y-2">
                                            <div>
                                                <span className="text-[10px] text-slate-400 block mb-1">Musim (Season):</span>
                                                <div className="flex gap-1">
                                                    {[1, 2, 3].map((s) => (
                                                        <button
                                                            key={s}
                                                            onClick={() => setSelectedSeason(s)}
                                                            className={`flex-1 py-1 rounded-lg font-bold transition ${
                                                                selectedSeason === s ? 'bg-red-600 text-white' : 'bg-white/10 text-slate-300'
                                                            }`}
                                                        >
                                                            Musim {s}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <span className="text-[10px] text-slate-400 block mb-1">Episode:</span>
                                                <div className="grid grid-cols-4 gap-1 max-h-36 overflow-y-auto">
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 16, 24].map((ep) => (
                                                        <button
                                                            key={ep}
                                                            onClick={() => {
                                                                setSelectedEpisode(ep);
                                                                setIframeLoading(true);
                                                                setShowEpisodeMenu(false);
                                                            }}
                                                            className={`py-1 rounded-lg font-bold text-center transition ${
                                                                selectedEpisode === ep ? 'bg-red-600 text-white' : 'bg-white/10 text-slate-300'
                                                            }`}
                                                        >
                                                            Eps {ep}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* FULLSCREEN BUTTON IN HEADER */}
                        <button
                            onClick={toggleFullscreen}
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                            title="Layar Penuh Bingkai (F)"
                        >
                            <Maximize className="w-4 h-4" />
                        </button>

                        {/* CUSTOM TMDB ID BUTTON */}
                        <button
                            onClick={() => setShowTmdbModal(true)}
                            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition cursor-pointer"
                            title="Ubah TMDB Stream ID"
                        >
                            <Search className="w-4 h-4" />
                        </button>

                        {/* CLOSE BUTTON */}
                        <button
                            onClick={onClose}
                            className="px-3 py-1.5 rounded-xl bg-red-600/80 hover:bg-red-600 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer shadow-md"
                            title="Tutup Player (Esc)"
                        >
                            <X className="w-4 h-4" />
                            <span>Tutup</span>
                        </button>
                    </div>
                </div>

                {/* 2. FRAMED VIDEO VIEWPORT (BINGKAI PEMUTAR VIDEO) */}
                <div 
                    ref={frameContainerRef}
                    className="relative w-full aspect-video bg-black rounded-b-3xl overflow-hidden flex items-center justify-center"
                >
                    {useStreambertEmbed ? (
                        <>
                            {iframeLoading && (
                                <div className="absolute inset-0 z-10 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-4 animate-in fade-in duration-200">
                                    <div className="relative flex items-center justify-center">
                                        <div className="w-16 h-16 border-4 border-red-600/20 border-t-red-600 rounded-full animate-spin" />
                                        <div className="w-20 h-20 border-2 border-red-500/10 border-b-red-500 rounded-full animate-spin absolute -inset-2" style={{ animationDirection: 'reverse', animationDuration: '2s' }} />
                                        <Server className="w-6 h-6 text-red-500 absolute inset-0 m-auto animate-pulse" />
                                    </div>
                                    <div className="text-center space-y-1.5 max-w-sm px-4">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-[10px] font-bold uppercase tracking-wider">
                                            <RefreshCw className="w-3 h-3 animate-spin text-red-400" />
                                            Menghubungkan Server Streambert
                                        </div>
                                        <h3 className="text-sm font-extrabold text-white tracking-wide uppercase">
                                            Menghubungkan Ke {activeSourceObj.label}...
                                        </h3>
                                        <p className="text-xs text-slate-400">
                                            Media TMDB ID: <span className="font-mono text-red-400 font-bold">{currentTmdbId}</span>
                                            {item.type === 'series' && <span> • S{selectedSeason} E{selectedEpisode}</span>}
                                        </p>
                                    </div>
                                </div>
                            )}

                            <iframe
                                ref={iframeRef}
                                src={streamUrl}
                                className="w-full h-full border-0"
                                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                                allowFullScreen
                                onLoad={() => setIframeLoading(false)}
                                title={`Streambert Player - ${item.title}`}
                            />
                        </>
                    ) : (
                        <video
                            ref={videoRef}
                            src={item.videoUrl}
                            autoPlay
                            controls
                            className="w-full h-full object-contain"
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={() => setIsPlaying(false)}
                        />
                    )}
                </div>
            </div>

            {/* CUSTOM TMDB ID SEARCH MODAL */}
            {showTmdbModal && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                    <div className="w-full max-w-md bg-slate-950 border border-white/20 rounded-3xl p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <h3 className="text-base font-bold text-white flex items-center gap-2">
                                <Search className="w-5 h-5 text-red-500" />
                                Cari & Hubungkan TMDB Stream ID
                            </h3>
                            <button
                                onClick={() => setShowTmdbModal(false)}
                                className="text-slate-400 hover:text-white"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <p className="text-xs text-slate-300">
                            Masukkan ID Film / Seri dari Database TMDB (TheMovieDB) untuk memutar video dari server Streambert secara langsung.
                        </p>

                        <form onSubmit={handleApplyCustomTmdb} className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-300 block mb-1">TMDB ID:</label>
                                <input
                                    type="text"
                                    value={customTmdbInput}
                                    onChange={(e) => setCustomTmdbInput(e.target.value)}
                                    placeholder="Contoh: 27205 (Inception), 157336 (Interstellar)"
                                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white font-mono text-sm focus:outline-none focus:border-red-500"
                                />
                            </div>

                            <div className="p-3 rounded-xl bg-red-950/40 border border-red-500/20 text-[11px] text-slate-300 space-y-1">
                                <span className="font-bold text-red-400 block flex items-center gap-1">
                                    <AlertCircle className="w-3.5 h-3.5" /> Contoh ID TMDB Populer:
                                </span>
                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {[
                                        { label: 'Inception (27205)', id: '27205' },
                                        { label: 'Interstellar (157336)', id: '157336' },
                                        { label: 'Fight Club (550)', id: '550' },
                                        { label: 'Peaky Blinders (60574)', id: '60574' },
                                        { label: 'Stranger Things (66732)', id: '66732' },
                                    ].map((demo) => (
                                        <button
                                            key={demo.id}
                                            type="button"
                                            onClick={() => setCustomTmdbInput(demo.id)}
                                            className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-mono text-[10px]"
                                        >
                                            {demo.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setShowTmdbModal(false)}
                                    className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-lg shadow-red-600/30"
                                >
                                    Hubungkan Stream
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
