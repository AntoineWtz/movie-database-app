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
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=62d84bb73740c0734998e744f571926a`);
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
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=62d84bb73740c0734998e744f571926a`);
        if (!response.ok) {
            throw new Error('Failed to fetch upcoming movies');
        }
        return response.json();
    } catch (error: any) {
        throw new Error(String(error.message));
    }
};
