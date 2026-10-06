import { Sparkles, Film, Tv, Flame, Heart, Zap, Ghost, Smile, Compass } from 'lucide-react';
import { GENRES } from '@/data/movies';

interface CategoryPillFilterProps {
    activeGenre: string;
    onSelectGenre: (genre: string) => void;
}

export default function CategoryPillFilter({ activeGenre, onSelectGenre }: CategoryPillFilterProps) {
    const getIcon = (genre: string) => {
        switch (genre) {
            case 'Semua':
                return <Flame className="w-3.5 h-3.5" />;
            case 'ZTV Originals':
                return <Sparkles className="w-3.5 h-3.5 text-amber-300" />;
            case 'Aksi & Sci-Fi':
                return <Zap className="w-3.5 h-3.5 text-cyan-400" />;
            case 'Horor & Misteri':
                return <Ghost className="w-3.5 h-3.5 text-purple-400" />;
            case 'Drama Indonesia':
                return <Heart className="w-3.5 h-3.5 text-rose-400" />;
            case 'Anime':
                return <Film className="w-3.5 h-3.5 text-pink-400" />;
            case 'Komedi':
                return <Smile className="w-3.5 h-3.5 text-amber-400" />;
            case 'Petualangan':
                return <Compass className="w-3.5 h-3.5 text-emerald-400" />;
            default:
                return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
            <div className="flex items-center gap-2 overflow-x-auto py-2 px-1 no-scrollbar">
                {GENRES.map((genre) => {
                    const isActive = activeGenre === genre;
                    return (
                        <button
                            key={genre}
                            onClick={() => onSelectGenre(genre)}
                            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold shrink-0 flex items-center gap-2 transition-all duration-200 cursor-pointer shadow-sm ${
                                isActive
                                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-lg shadow-red-600/30 scale-105'
                                    : 'bg-slate-900 border border-white/10 text-slate-300 hover:text-white hover:bg-slate-800 hover:border-white/20'
                            }`}
                        >
                            {getIcon(genre)}
                            {genre}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
