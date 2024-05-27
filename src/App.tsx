import React from 'react';
import MovieList from './components/MovieList';
import './tailwind.css';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold m-4 text-center">Movie Database</h1>
      <MovieList />
    </div>
  );
};

export default App;
