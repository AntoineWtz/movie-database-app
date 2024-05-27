import React from 'react';

interface MovieDetailProps {
    movie: any;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
    return (
        <div>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>
        </div>
    );
};

export default MovieDetail;
