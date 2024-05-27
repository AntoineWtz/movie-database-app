import React from 'react';
import MovieDetail from './MovieDetail';

interface SearchResultsProps {
    results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="my-4">
            {results.length > 0 ? (
                results.map((movie) => (
                    <div key={movie.id} className="m-4 p-2 border border-gray-200 rounded-md bg-white shadow-sm">
                        <MovieDetail movie={movie} />
                    </div>
                ))
            ) : (
                <p className="text-center text-gray-500">No results found</p>
            )}
        </div>
    );
};

export default SearchResults;
