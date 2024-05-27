import React from 'react';

interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

interface HeroProps {
    nowPlayingMovies: Movie[];
    upcomingMovies: Movie[];
}

const Hero: React.FC<HeroProps> = ({ nowPlayingMovies, upcomingMovies }) => {
    const displayNowPlayingMovies = nowPlayingMovies.slice(0, 5);
    const displayUpcomingMovies = upcomingMovies.slice(0, 5);

    return (
        <div className="p-4 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                    <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
                    <div className="space-y-4">
                        {displayNowPlayingMovies.map((movie) => (
                            <div key={movie.id} className="flex items-center bg-white rounded-md shadow-md overflow-hidden p-2">
                                <img
                                    src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-16 h-24 object-cover rounded-md"
                                />
                                <div className="ml-4">
                                    <h3 className="text-md font-semibold">{movie.title}</h3>
                                    <p className="text-sm text-gray-600">Release Date: {movie.release_date}</p>
                                    <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Upcoming Movies</h2>
                    <div className="space-y-4">
                        {displayUpcomingMovies.map((movie) => (
                            <div key={movie.id} className="flex items-center bg-white rounded-md shadow-md overflow-hidden p-2">
                                <img
                                    src={`https://image.tmdb.org/t/p/w92/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-16 h-24 object-cover rounded-md"
                                />
                                <div className="ml-4">
                                    <h3 className="text-md font-semibold">{movie.title}</h3>
                                    <p className="text-sm text-gray-600">Release Date: {movie.release_date}</p>
                                    <p className="text-sm text-gray-600">Rating: {movie.vote_average}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Hero;
