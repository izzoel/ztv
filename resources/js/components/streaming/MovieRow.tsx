import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaItem } from '@/data/movies';
import MovieCard from './MovieCard';

interface MovieRowProps {
    title: string;
    items: MediaItem[];
    onPlay: (item: MediaItem) => void;
    onOpenDetail: (item: MediaItem) => void;
    myList: string[];
    onToggleMyList: (id: string) => void;
    showProgress?: boolean;
    badge?: string;
}

export default function MovieRow({
    title,
    items,
    onPlay,
    onOpenDetail,
    myList,
    onToggleMyList,
    showProgress = false,
    badge
}: MovieRowProps) {
    const rowRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: 'left' | 'right') => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;
            const scrollAmount = clientWidth * 0.75;
            rowRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (items.length === 0) return null;

    return (
        <section className="relative my-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto group/row">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        {title}
                    </h2>
                    {badge && (
                        <span className="px-2.5 py-0.5 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs font-semibold uppercase">
                            {badge}
                        </span>
                    )}
                </div>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                {/* Left Arrow */}
                <button
                    onClick={() => handleScroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-r-2xl bg-slate-950/80 border border-l-0 border-white/20 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover/row:opacity-100 hover:bg-red-600 transition-all duration-300 shadow-xl cursor-pointer"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow */}
                <button
                    onClick={() => handleScroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-l-2xl bg-slate-950/80 border border-r-0 border-white/20 text-white flex items-center justify-center backdrop-blur-md opacity-0 group-hover/row:opacity-100 hover:bg-red-600 transition-all duration-300 shadow-xl cursor-pointer"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                {/* Cards Scroll */}
                <div
                    ref={rowRef}
                    className="flex items-center gap-4 overflow-x-auto py-4 px-1 scroll-smooth no-scrollbar"
                >
                    {items.map((item) => (
                        <MovieCard
                            key={item.id}
                            item={item}
                            onPlay={onPlay}
                            onOpenDetail={onOpenDetail}
                            isSaved={myList.includes(item.id)}
                            onToggleMyList={onToggleMyList}
                            showProgress={showProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
