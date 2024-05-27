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

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        searchMovies(query)
            .then((data) => setSearchResults(data.results))
            .catch((error) => console.error('Error searching movies:', error));
    };

    const handleSort = (option: string) => {
        setSortOption(option);
        // Implement sorting logic here if needed
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
