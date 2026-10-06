import React from 'react';

export default function StreamingSkeleton() {
    return (
        <div className="w-full space-y-8 select-none">
            {/* Hero Spotlight Skeleton */}
            <div className="relative w-full h-[80vh] min-h-[540px] max-h-[750px] overflow-hidden bg-slate-950/90 flex flex-col justify-end pb-16 pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
                {/* Background Shimmer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/60 to-slate-950 animate-pulse" />

                {/* Content Skeleton */}
                <div className="relative z-10 max-w-2xl space-y-4">
                    {/* Badge Pill Placeholders */}
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-24 bg-slate-800/80 rounded-md animate-pulse" />
                        <div className="h-6 w-20 bg-slate-800/80 rounded-md animate-pulse" />
                        <div className="h-6 w-16 bg-slate-800/80 rounded-md animate-pulse" />
                    </div>

                    {/* Title Placeholder */}
                    <div className="h-12 sm:h-16 w-3/4 max-w-lg bg-gradient-to-r from-slate-800 via-slate-700/60 to-slate-800 rounded-2xl animate-pulse" />

                    {/* Subtitle / Metadata */}
                    <div className="flex items-center gap-3">
                        <div className="h-4 w-12 bg-slate-800/70 rounded animate-pulse" />
                        <div className="h-4 w-16 bg-slate-800/70 rounded animate-pulse" />
                        <div className="h-4 w-40 bg-slate-800/70 rounded animate-pulse" />
                    </div>

                    {/* Synopsis Placeholder Lines */}
                    <div className="space-y-2 max-w-xl pt-2">
                        <div className="h-4.5 w-full bg-slate-800/60 rounded-md animate-pulse" />
                        <div className="h-4.5 w-5/6 bg-slate-800/60 rounded-md animate-pulse" />
                        <div className="h-4.5 w-4/6 bg-slate-800/60 rounded-md animate-pulse" />
                    </div>

                    {/* Buttons Skeleton */}
                    <div className="flex items-center gap-3 pt-4">
                        <div className="h-12 w-44 bg-red-900/40 border border-red-500/20 rounded-2xl animate-pulse flex items-center justify-center gap-2" />
                        <div className="h-12 w-36 bg-slate-800/90 border border-white/10 rounded-2xl animate-pulse flex items-center justify-center" />
                    </div>
                </div>
            </div>

            {/* Genre Pill Filter Skeleton */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 overflow-x-auto py-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((idx) => (
                        <div
                            key={idx}
                            className="h-9 w-28 flex-none bg-slate-900 border border-white/5 rounded-full animate-pulse"
                        />
                    ))}
                </div>
            </div>

            {/* Top 10 Row Skeleton */}
            <div className="my-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-7 bg-red-600 rounded-full animate-pulse" />
                    <div className="h-7 w-64 bg-slate-800/80 rounded-lg animate-pulse" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="flex items-end gap-2">
                            <div className="h-24 w-12 bg-slate-800/40 rounded-lg animate-pulse" />
                            <div className="w-full aspect-[2/3] bg-slate-900 border border-white/5 rounded-2xl animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Movie Row Skeletons (2 rows) */}
            {[1, 2].map((rowIdx) => (
                <div key={rowIdx} className="my-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-4">
                    <div className="h-7 w-56 bg-slate-800/80 rounded-lg animate-pulse" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6].map((cardIdx) => (
                            <div
                                key={cardIdx}
                                className="aspect-[2/3] w-full bg-slate-900 border border-white/5 rounded-2xl animate-pulse flex flex-col justify-end p-3 space-y-2"
                            >
                                <div className="h-4 w-3/4 bg-slate-800/80 rounded" />
                                <div className="h-3 w-1/2 bg-slate-800/50 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
