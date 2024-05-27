import React from 'react';

interface SortOptionsProps {
    onChange: (value: string) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({ onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="my-4">
            <label htmlFor="sortOptions" className="mr-2 font-bold">Sort by:</label>
            <select id="sortOptions" onChange={handleChange} className="p-2 border border-gray-300 rounded-md">
                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="release_date.desc">Release Date Descending</option>
                <option value="release_date.asc">Release Date Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
            </select>
        </div>
    );
};

export default SortOptions;
