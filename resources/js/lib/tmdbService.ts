/**
 * TMDB (TheMovieDB) Live API Service for ZTV Stream
 * Fetches real movies, backdrops, posters, ratings & metadata using TMDB API Read Access Token.
 */

import { MediaItem } from '@/data/movies';

export const TMDB_READ_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjNiOGQ3ZTAyZGViZjMzMDJkZTkyNzM2M2Y5MDVhNSIsIm5iZiI6MTc5MTMxNjg4Ny40MjUsInN1YiI6IjZhYzU1Mzk3N2ZhZGRlYzkyZGJiYzM2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1QPNbFQVmR2xtf4vAh0Cb0I0XfuEM2uyQo0ksHE0NTs';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMG_POSTER = 'https://image.tmdb.org/t/p/w500';
const TMDB_IMG_BACKDROP = 'https://image.tmdb.org/t/p/w1280';

// Genre ID map
const GENRE_MAP: Record<number, string> = {
    28: 'Aksi',
    12: 'Petualangan',
    16: 'Anime',
    35: 'Komedi',
    80: 'Misteri',
    99: 'Dokumenter',
    18: 'Drama Indonesia',
    10751: 'Keluarga',
    14: 'Petualangan',
    36: 'Sejarah',
    27: 'Horor & Misteri',
    9648: 'Horor & Misteri',
    10749: 'Drama Indonesia',
    878: 'Aksi & Sci-Fi',
    53: 'Horor & Misteri',
    10759: 'Aksi & Sci-Fi',
    10765: 'Aksi & Sci-Fi',
};

/**
 * Perform authorized request to TMDB API
 */
export async function fetchFromTmdb(endpoint: string, params: Record<string, string> = {}): Promise<any> {
    try {
        const url = new URL(`${TMDB_BASE_URL}${endpoint}`);
        url.searchParams.set('language', 'id-ID'); // Preferred Indonesian language metadata
        
        Object.entries(params).forEach(([key, val]) => {
            url.searchParams.set(key, val);
        });

        const response = await fetch(url.toString(), {
            headers: {
                Authorization: `Bearer ${TMDB_READ_TOKEN}`,
                'Content-Type': 'application/json;charset=utf-8',
            },
        });

        if (!response.ok) {
            throw new Error(`TMDB API Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.warn('TMDB Fetch fallback:', error);
        return null;
    }
}

/**
 * Format raw TMDB result item to ZTV MediaItem
 */
export function formatTmdbItemToMedia(item: any, forceType?: 'movie' | 'series', isOriginal: boolean = false): MediaItem | null {
    if (!item || (!item.poster_path && !item.backdrop_path)) return null;

    const isMovie = forceType ? forceType === 'movie' : (item.media_type === 'movie' || Boolean(item.release_date));
    const title = item.title || item.name || item.original_title || item.original_name || 'Judul Film';
    const releaseDate = item.release_date || item.first_air_date || '2025-01-01';
    const year = parseInt(releaseDate.split('-')[0]) || 2025;
    
    // Map genres
    const genreNames: string[] = [];
    if (item.genre_ids && Array.isArray(item.genre_ids)) {
        item.genre_ids.forEach((gid: number) => {
            if (GENRE_MAP[gid] && !genreNames.includes(GENRE_MAP[gid])) {
                genreNames.push(GENRE_MAP[gid]);
            }
        });
    }
    if (genreNames.length === 0) {
        genreNames.push(isMovie ? 'Aksi & Sci-Fi' : 'Drama Indonesia');
    }

    const voteAvg = item.vote_average ? item.vote_average.toFixed(1) : '8.5';
    const matchVal = Math.min(99, Math.max(82, Math.round((item.vote_average || 8) * 10)));

    const posterUrl = item.poster_path
        ? `${TMDB_IMG_POSTER}${item.poster_path}`
        : 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop';

    const backdropUrl = item.backdrop_path
        ? `${TMDB_IMG_BACKDROP}${item.backdrop_path}`
        : posterUrl;

    return {
        id: `tmdb-${isMovie ? 'mov' : 'tv'}-${item.id}`,
        tmdbId: item.id,
        title: title.toUpperCase(),
        type: isMovie ? 'movie' : 'series',
        rating: voteAvg,
        matchScore: `${matchVal}% Cocok`,
        year: year,
        ageRating: item.adult ? '18+' : (item.vote_average > 7.8 ? '16+' : '13+'),
        duration: isMovie ? '2j 15m' : '1 Musim (10 Episode)',
        quality: item.vote_average > 8.0 ? '4K Ultra HD' : 'HD',
        genres: genreNames,
        synopsis: item.overview && item.overview.trim().length > 10
            ? item.overview
            : `Menampilkan alur cerita seru nan memukau. Nikmati tayangan ${title} dengan kualitas video streaming jernih dari server ZTV.`,
        cast: ['Aktor Utama TMDB', 'Pemeran Pendukung'],
        director: 'Sutradara TMDB',
        posterUrl: posterUrl,
        backdropUrl: backdropUrl,
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        isOriginal: isOriginal,
        isTrending: true,
        episodes: !isMovie ? [
            {
                id: `ep-1-${item.id}`,
                episodeNumber: 1,
                title: 'Eps 1: Permulaan',
                duration: '45m',
                thumbnail: backdropUrl,
                synopsis: 'Episode pertama memperkenalkan karakter utama dan konflik mendasar cerita.'
            },
            {
                id: `ep-2-${item.id}`,
                episodeNumber: 2,
                title: 'Eps 2: Konflik Utama',
                duration: '50m',
                thumbnail: backdropUrl,
                synopsis: 'Ketegangan semakin memuncak saat rahasia tersembunyi mulai terungkap.'
            }
        ] : undefined
    };
}

/**
 * Search movies & TV shows live on TMDB
 */
export async function searchTmdbContent(query: string): Promise<MediaItem[]> {
    if (!query || query.trim().length < 2) return [];
    try {
        const res = await fetchFromTmdb('/search/multi', { query: query.trim() });
        if (!res || !res.results || !Array.isArray(res.results)) return [];
        return res.results
            .map((item: any) => formatTmdbItemToMedia(item))
            .filter((item: MediaItem | null): item is MediaItem => item !== null)
            .slice(0, 10);
    } catch {
        return [];
    }
}

/**
 * Fetch catalog of live TMDB items for homepage categories
 */
export async function fetchLiveTmdbCatalog(): Promise<{
    featured: MediaItem[];
    trending: MediaItem[];
    top10: MediaItem[];
    action: MediaItem[];
    horror: MediaItem[];
    series: MediaItem[];
    all: MediaItem[];
}> {
    const [trendingRes, popularMoviesRes, popularTvRes, actionRes, horrorRes] = await Promise.all([
        fetchFromTmdb('/trending/all/day'),
        fetchFromTmdb('/movie/popular'),
        fetchFromTmdb('/tv/popular'),
        fetchFromTmdb('/discover/movie', { with_genres: '28,878', sort_by: 'popularity.desc' }),
        fetchFromTmdb('/discover/movie', { with_genres: '27,53', sort_by: 'popularity.desc' }),
    ]);

    const formatList = (results: any[], forceType?: 'movie' | 'series', isOriginal: boolean = false) => {
        if (!results || !Array.isArray(results)) return [];
        return results
            .map((item) => formatTmdbItemToMedia(item, forceType, isOriginal))
            .filter((item): item is MediaItem => item !== null);
    };

    const trending = formatList(trendingRes?.results || []);
    const popularMovies = formatList(popularMoviesRes?.results || [], 'movie');
    const popularTv = formatList(popularTvRes?.results || [], 'series', true);
    const actionMovies = formatList(actionRes?.results || [], 'movie');
    const horrorMovies = formatList(horrorRes?.results || [], 'movie');

    // Build Featured Items for Hero Carousel (top 5 rated/trending items)
    const featured = [...trending, ...popularMovies]
        .filter((item, index, self) => index === self.findIndex((t) => t.tmdbId === item.tmdbId))
        .slice(0, 5);

    // Build Top 10 with rank numbers 1..10
    const top10 = [...popularMovies, ...popularTv]
        .slice(0, 10)
        .map((item, idx) => ({ ...item, top10Rank: idx + 1 }));

    // Combined catalog deduplicated by tmdbId
    const allMap = new Map<string | number, MediaItem>();
    [...featured, ...trending, ...popularMovies, ...popularTv, ...actionMovies, ...horrorMovies].forEach((item) => {
        if (item.tmdbId && !allMap.has(item.tmdbId)) {
            allMap.set(item.tmdbId, item);
        }
    });

    const all = Array.from(allMap.values());

    return {
        featured: featured.length > 0 ? featured : [],
        trending: trending.length > 0 ? trending : [],
        top10: top10.length > 0 ? top10 : [],
        action: actionMovies.length > 0 ? actionMovies : [],
        horror: horrorMovies.length > 0 ? horrorMovies : [],
        series: popularTv.length > 0 ? popularTv : [],
        all: all.length > 0 ? all : [],
    };
}
