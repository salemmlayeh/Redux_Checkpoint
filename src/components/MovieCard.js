import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie, onDelete }) {
  return (
    <div className="movie-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <Link
        to={`/movies/${movie.id}`}
        state={{ movie }}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img src={movie.posterURL} alt={movie.title} style={{ width: '100%', height: 300, objectFit: 'cover' }} />
        <div className="movie-card-content">
          <h3>{movie.title}</h3>
          <p style={{ color: '#666' }}>{movie.description.length > 120 ? movie.description.slice(0, 120) + '...' : movie.description}</p>
        </div>
      </Link>

      <div style={{ padding: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>⭐ {movie.rating}</span>
        <button onClick={() => onDelete(movie.id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '6px 10px', borderRadius: 6 }}>
          Delete
        </button>
      </div>
    </div>
  );
}
