import { Play, Plus, Check, Info } from 'lucide-react';
import { MediaItem } from '@/data/movies';

interface Top10RowProps {
    items: MediaItem[];
    onPlay: (item: MediaItem) => void;
    onOpenDetail: (item: MediaItem) => void;
    myList: string[];
    onToggleMyList: (id: string) => void;
}

export default function Top10Row({
    items,
    onPlay,
    onOpenDetail,
    myList,
    onToggleMyList
}: Top10RowProps) {
    const top10 = items.filter((item) => item.top10Rank !== undefined).sort((a, b) => (a.top10Rank || 0) - (b.top10Rank || 0));

    if (top10.length === 0) return null;

    return (
        <section className="my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-red-600 rounded-full" />
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-3">
                    Top 10 Hari Ini di Indonesia
                </h2>
            </div>

            <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto py-4 px-2 no-scrollbar">
                {top10.map((item, index) => {
                    const isSaved = myList.includes(item.id);
                    const rank = index + 1;

                    return (
                        <div
                            key={item.id}
                            className="group relative flex-none flex items-end w-64 sm:w-72 cursor-pointer select-none"
                            onClick={() => onOpenDetail(item)}
                        >
                            {/* Huge Rank Number */}
                            <span className="font-black text-[120px] sm:text-[140px] leading-none tracking-tighter text-transparent stroke-text font-mono select-none -mr-8 z-0 transition-transform duration-300 group-hover:scale-110">
                                {rank}
                            </span>

                            {/* Card Poster Overlap */}
                            <div className="relative z-10 w-40 sm:w-48 aspect-[2/3] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-red-900/40">
                                <img
                                    src={item.posterUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />

                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                    <div className="flex items-center gap-2 mb-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onPlay(item);
                                            }}
                                            className="w-9 h-9 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition"
                                        >
                                            <Play className="w-4 h-4 fill-white ml-0.5" />
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onToggleMyList(item.id);
                                            }}
                                            className={`w-8 h-8 rounded-full flex items-center justify-center border backdrop-blur-md transition ${
                                                isSaved ? 'bg-emerald-600 text-white' : 'bg-white/20 text-white'
                                            }`}
                                        >
                                            {isSaved ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </button>
                                    </div>
                                    <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                                    <span className="text-[10px] text-amber-400 font-semibold">
                                        ★ {item.rating} • {item.genres[0]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Custom Inline CSS for Stroked Numbers */}
            <style>{`
                .stroke-text {
                    -webkit-text-stroke: 4px rgba(255, 255, 255, 0.25);
                }
                .group:hover .stroke-text {
                    -webkit-text-stroke: 4px rgba(239, 68, 68, 0.9);
                }
            `}</style>
        </section>
    );
}
