import React from 'react';

interface MovieDetailProps {
    movie: any;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
    return (
        <div className="flex flex-row justify-evenly items-center p-2">
            <div className="flex-1">
                <h2 className="text-2xl font-bold">{movie.title}</h2>
                <p className="my-2 mr-8">{movie.overview}</p>
                <p className="text-gray-600">Release Date: {movie.release_date}</p>
                <p className="text-gray-600">Rating: {movie.vote_average}</p>
            </div>
            <div className="flex-none">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-auto h-80 object-cover object-center rounded-md shadow-md mr-2"
                />
            </div>
        </div>
    );
};

export default MovieDetail;
