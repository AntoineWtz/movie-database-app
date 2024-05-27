import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import SearchResults from './SearchResults';
import { fetchNowPlayingMovies, fetchUpcomingMovies, searchMovies } from '../services/movieService';

const MovieList: React.FC = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        fetchNowPlayingMovies()
            .then((data) => setNowPlayingMovies(data.results))
            .catch((error) => console.error('Error fetching now playing movies:', error));

        fetchUpcomingMovies()
            .then((data) => setUpcomingMovies(data.results))
            .catch((error) => console.error('Error fetching upcoming movies:', error));
    }, []);

    useEffect(() => {
        if (sortOption) {
            const sortedResults = [...searchResults].sort((a, b) => {
                switch (sortOption) {
                    case 'popularity.desc':
                        return b.popularity - a.popularity;
                    case 'popularity.asc':
                        return a.popularity - b.popularity;
                    case 'release_date.desc':
                        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
                    case 'release_date.asc':
                        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
                    case 'vote_average.desc':
                        return b.vote_average - a.vote_average;
                    case 'vote_average.asc':
                        return a.vote_average - b.vote_average;
                    default:
                        return 0;
                }
            });
            setSearchResults(sortedResults);
        }
    }, [sortOption, searchResults]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        searchMovies(query)
            .then((data) => setSearchResults(data.results))
            .catch((error) => console.error('Error searching movies:', error));
    };

    const handleSort = (option: string) => {
        setSortOption(option);
    };

    return (
        <div>
            <Hero nowPlayingMovies={nowPlayingMovies} upcomingMovies={upcomingMovies} />
            <SearchBar onSearch={handleSearch} />
            <SortOptions onChange={handleSort} />
            <SearchResults results={searchResults} />
        </div>
    );
};

export default MovieList;
