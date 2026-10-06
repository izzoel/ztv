import { Play, Plus, Check, X, Star, Sparkles, Film, Clock, Share2 } from 'lucide-react';
import { MediaItem, ALL_MEDIA } from '@/data/movies';

interface MovieDetailModalProps {
    item: MediaItem | null;
    onClose: () => void;
    onPlay: (item: MediaItem) => void;
    isSaved: boolean;
    onToggleMyList: (id: string) => void;
}

export default function MovieDetailModal({
    item,
    onClose,
    onPlay,
    isSaved,
    onToggleMyList
}: MovieDetailModalProps) {
    if (!item) return null;

    return (
        <div 
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200 cursor-pointer"
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-4xl bg-slate-950 border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-8 cursor-default"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-white/20 text-white hover:bg-red-600 transition shadow-lg cursor-pointer flex items-center gap-1 text-xs font-bold"
                >
                    <X className="w-4 h-4" />
                    <span>Tutup</span>
                </button>

                {/* Hero Header Banner */}
                <div className="relative w-full h-80 sm:h-96 overflow-hidden">
                    <img
                        src={item.backdropUrl}
                        alt={item.title}
                        className="w-full h-full object-cover filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

                    <div className="absolute bottom-6 left-6 right-6 space-y-3">
                        <div className="flex items-center gap-2">
                            <span className="px-2.5 py-0.5 rounded bg-white/10 text-white text-xs font-semibold backdrop-blur-md">
                                {item.quality}
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight drop-shadow-lg">
                            {item.title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300 font-medium">
                            <span className="text-emerald-400 font-bold">{item.matchScore}</span>
                            <span className="px-1.5 py-0.2 rounded border border-white/20 text-xs">{item.ageRating}</span>
                            <span>{item.year}</span>
                            <span>{item.duration}</span>
                            <span className="text-amber-400 flex items-center gap-1">
                                <Star className="w-3.5 h-3.5 fill-amber-400" />
                                {item.rating}
                            </span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3 pt-2">
                            <button
                                onClick={() => {
                                    onClose();
                                    onPlay(item);
                                }}
                                className="px-6 py-2.5 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-red-600/40 transition cursor-pointer"
                            >
                                <Play className="w-4 h-4 fill-white" />
                                Putar Film
                            </button>

                            <button
                                onClick={() => onToggleMyList(item.id)}
                                className={`px-4 py-2.5 rounded-2xl text-sm font-semibold flex items-center gap-2 border backdrop-blur-md transition cursor-pointer ${
                                    isSaved
                                        ? 'bg-emerald-600/30 border-emerald-500 text-emerald-300'
                                        : 'bg-white/10 border-white/20 text-white hover:bg-white/20'
                                }`}
                            >
                                {isSaved ? <Check className="w-4 h-4 text-emerald-400" /> : <Plus className="w-4 h-4" />}
                                {isSaved ? 'Tersimpan' : 'Daftar Saya'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-8 text-slate-300">
                    {/* Synopsis & Cast */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-3">
                            <h3 className="text-lg font-bold text-white">Ringkasan Cerita</h3>
                            <p className="text-sm text-slate-300 leading-relaxed">{item.synopsis}</p>
                        </div>
                        <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-white/10 text-xs">
                            <div>
                                <span className="text-slate-400 block font-semibold">Pemeran Utama:</span>
                                <span className="text-white font-medium">{item.cast.join(', ')}</span>
                            </div>
                            <div>
                                <span className="text-slate-400 block font-semibold">Sutradara:</span>
                                <span className="text-white font-medium">{item.director}</span>
                            </div>
                            <div>
                                <span className="text-slate-400 block font-semibold">Genre:</span>
                                <span className="text-red-400 font-medium">{item.genres.join(', ')}</span>
                            </div>
                        </div>
                    </div>

                    {/* Episodes List (if series) */}
                    {item.type === 'series' && item.episodes && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Film className="w-5 h-5 text-red-500" />
                                    Daftar Episode (Musim 1)
                                </h3>
                                <span className="text-xs text-slate-400">{item.episodes.length} Episode Tersedia</span>
                            </div>

                            <div className="space-y-3">
                                {item.episodes.map((ep) => (
                                    <div
                                        key={ep.id}
                                        onClick={() => {
                                            onClose();
                                            onPlay(item);
                                        }}
                                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-3 rounded-2xl bg-slate-900/80 hover:bg-slate-900 border border-white/5 hover:border-red-500/50 transition cursor-pointer group"
                                    >
                                        <div className="relative w-full sm:w-36 aspect-video rounded-xl overflow-hidden bg-slate-950 shrink-0">
                                            <img src={ep.thumbnail} alt={ep.title} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-red-600/30 flex items-center justify-center transition">
                                                <Play className="w-6 h-6 text-white fill-white opacity-90 group-hover:scale-110 transition" />
                                            </div>
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <h4 className="text-sm font-bold text-white group-hover:text-red-400 transition">
                                                    {ep.title}
                                                </h4>
                                                <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                                                    <Clock className="w-3 h-3" />
                                                    {ep.duration}
                                                </span>
                                            </div>
                                            <p className="text-xs text-slate-400 line-clamp-2">{ep.synopsis}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Episodes List (if series) */}
                </div>
            </div>
        </div>
    );
}
