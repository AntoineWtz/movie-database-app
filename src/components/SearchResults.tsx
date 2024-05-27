// SearchResults.tsx
import React from 'react';
import MovieDetail from './MovieDetail';

interface SearchResultsProps {
    results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="my-8">
            {results.length > 0 ? (
                <ul>
                    {results.map((movie) => (
                        <li key={movie.id}>
                            <MovieDetail movie={movie} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default SearchResults;
