import React from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

export default function MovieDetails({ movies }) {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // If we arrived via Link state, use that; otherwise find by id in movies array
  const stateMovie = location.state && location.state.movie;
  const movie = stateMovie || movies.find((m) => String(m.id) === String(id));

  if (!movie) {
    return (
      <div className="app-container">
        <p>Movie not found.</p>
        <Link to="/">Go back home</Link>
      </div>
    );
  }

  return (
    <div className="app-container">
      <button onClick={() => navigate(-1)} style={{ marginBottom: 12 }}>← Back</button>

      <h2>{movie.title}</h2>

      <div style={{ maxWidth: 900, marginTop: 12 }}>
        {/* trailerLink should be an embed URL (e.g. https://www.youtube.com/embed/VIDEO_ID) */}
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
          <iframe
            src={movie.trailerLink}
            title={`${movie.title} trailer`}
            style={{
              position: 'absolute',
              top: 0, left: 0, width: '100%', height: '100%'
            }}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p style={{ marginTop: 12 }}>{movie.description}</p>
      </div>
    </div>
  );
}
