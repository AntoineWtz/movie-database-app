import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <input
                type="text"
                placeholder="Search movies..."
                value={query}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md w-1/2 block mx-auto"
            />
            <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 w-1/6 block mx-auto">
                Search
            </button>
        </form>
    );
};

export default SearchBar;
