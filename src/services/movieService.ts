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
