import React from 'react';

interface HeroProps {
    nowPlayingMovies: any[];
    upcomingMovies: any[];
}

const Hero: React.FC<HeroProps> = ({ nowPlayingMovies, upcomingMovies }) => {
    return (
        <div className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
                    <ul>
                        {nowPlayingMovies.map((movie) => (
                            <li key={movie.id} className="mb-2">
                                <h3 className="text-xl">{movie.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                    <ul>
                        {upcomingMovies.map((movie) => (
                            <li key={movie.id} className="mb-2">
                                <h3 className="text-xl">{movie.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Hero;
