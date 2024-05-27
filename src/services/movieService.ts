import axios from 'axios';

const API_KEY = '62d84bb73740c0734998e744f571926a';

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export const getMovies = async () => {
    try {
        const response = await axiosInstance.get('/movie/popular', {
            params: {
                api_key: API_KEY,
            },
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const fetchNowPlayingMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch now playing movies');
        }
        return response.json();
    } catch (error: any) {
        throw new Error(String(error.message));
    }
};

export const fetchUpcomingMovies = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error('Failed to fetch upcoming movies');
        }
        const data = await response.json();
        const upcomingMovies = data.results.filter((movie: any) => {
            const releaseDate = new Date(movie.release_date);
            const today = new Date();
            return releaseDate > today;
        });
        return { results: upcomingMovies };
    } catch (error: any) {
        throw new Error(String(error.message));
    }
};

export const searchMovies = async (query: string) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
        if (!response.ok) {
            throw new Error('Failed to search movies');
        }
        return response.json();
    } catch (error: any) {
        throw new Error(String(error.message));
    }
};
