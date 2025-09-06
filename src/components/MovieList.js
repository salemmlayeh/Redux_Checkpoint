import React from 'react';
import MovieCard from './MovieCard';

export default function MovieList({ movies, onDelete }) {
  if (!movies.length) return <p style={{ textAlign: 'center', color: '#777' }}>No movies found. Try adding one!</p>;

  return (
    <div className="movie-list" style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}>
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} onDelete={onDelete} />
      ))}
    </div>
  );
}
