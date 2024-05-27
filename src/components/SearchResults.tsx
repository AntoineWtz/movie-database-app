import React from 'react';

interface SearchResultsProps {
    results: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
    return (
        <div className="my-8">
            <h2>Search Results</h2>
            <ul>
                {results.map((result: any) => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
