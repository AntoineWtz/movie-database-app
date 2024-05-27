import React from 'react';
import MovieDetail from './MovieDetail';

interface SearchResultsProps {
    results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="my-8">
            {results.length > 0 ? (
                results.map((movie) => (
                    <MovieDetail key={movie.id} movie={movie} />
                ))
            ) : (
                <p>No results found</p>
            )}
        </div>
    );
};

export default SearchResults;
