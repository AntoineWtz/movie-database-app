import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import SearchBar from './SearchBar';
import SortOptions from './SortOptions';
import SearchResults from './SearchResults';
import { fetchNowPlayingMovies, fetchUpcomingMovies } from '../services/movieService';

const MovieList: React.FC = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState<any[]>([]);
    const [upcomingMovies, setUpcomingMovies] = useState<any[]>([]);
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        // Récupérer les films actuellement diffusés
        fetchNowPlayingMovies()
            .then((data) => setNowPlayingMovies(data.results))
            .catch((error) => console.error('Error fetching now playing movies:', error));

        // Récupérer les films à venir
        fetchUpcomingMovies()
            .then((data) => setUpcomingMovies(data.results))
            .catch((error) => console.error('Error fetching upcoming movies:', error));
    }, []);

    const handleSearch = (query: string) => {
        // Mettre à jour la recherche
        setSearchQuery(query);
        // Effectuer une recherche
        // Remplacer cette logique par l'appel à une fonction qui recherche les films en fonction de la requête
    };

    const handleSort = (option: string) => {
        // Mettre à jour l'option de tri
        setSortOption(option);
        // Trier les résultats en fonction de l'option sélectionnée
        // Remplacer cette logique par l'appel à une fonction qui trie les films en fonction de l'option
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
