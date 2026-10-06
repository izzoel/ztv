export interface Episode {
    id: string;
    episodeNumber: number;
    title: string;
    duration: string;
    thumbnail: string;
    synopsis: string;
}

export interface MediaItem {
    id: string;
    tmdbId?: number | string;
    title: string;
    type: 'movie' | 'series';
    rating: string;
    matchScore: string;
    year: number;
    ageRating: 'SU' | '13+' | '16+' | '18+';
    duration: string;
    quality: '4K Ultra HD' | 'HD' | 'Dolby Vision';
    genres: string[];
    synopsis: string;
    cast: string[];
    director: string;
    posterUrl: string;
    backdropUrl: string;
    videoUrl: string;
    isOriginal?: boolean;
    isTrending?: boolean;
    top10Rank?: number;
    progress?: number; // percentage 0-100 for continue watching
    episodes?: Episode[];
}

export const FEATURED_MEDIA: MediaItem[] = [];

export const ALL_MEDIA: MediaItem[] = [];

export const GENRES = [
    'Semua',
    'Aksi & Sci-Fi',
    'Horor & Misteri',
    'Drama Indonesia',
    'Anime',
    'Komedi',
    'Petualangan'
];
