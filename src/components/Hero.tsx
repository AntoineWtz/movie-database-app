import React from 'react';

interface HeroProps {
    nowPlayingMovies: any[]; // Définir le type de nowPlayingMovies
    upcomingMovies: any[]; // Définir le type de upcomingMovies
}

const Hero: React.FC<HeroProps> = ({ nowPlayingMovies, upcomingMovies }) => {
    return (
        <div className="flex justify-between items-center my-8">
            <div className="w-1/2 mr-4">
                <h2 className="text-2xl font-bold mb-4">Now Playing</h2>
                <ul>
                    {nowPlayingMovies.map((movie: any) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2 ml-4">
                <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
                <ul>
                    {upcomingMovies.map((movie: any) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Hero;