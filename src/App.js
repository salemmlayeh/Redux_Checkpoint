import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovieForm from './components/AddMovieForm';
import MovieDetails from './components/MovieDetails';

const initialMovies = [
  {
    id: 1,
    title: 'The Matrix',
    description: 'A hacker discovers that reality is a simulation and joins a rebellion against the machines.',
    posterURL: 'https://fiu-original.b-cdn.net/fontsinuse.com/use-images/170/170601/170601.jpeg',
    rating: 5,
    // example embed (replace with real trailer embed link if you want)
    trailerLink: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  },
  {
    id: 2,
    title: 'Inception',
    description: "A skilled thief is given a chance to have his criminal history erased by planting an idea into a target's subconscious.",
    posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4_-usyQthToesH8H-eLPjUDlTANiK80zyVPqZ9-hSHPixDywYPX4CIRTkMD12uA9RgSN3K137qgQGQJYnqxItIGvyxwAEKkDDhFibSA',
    rating: 4,
    trailerLink: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  },
  {
    id: 3,
    title: 'Toy Story',
    description: 'Toys come to life when people are not around and must cope with change as their owner grows up.',
    posterURL: 'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg',
    rating: 4,
    trailerLink: 'https://www.youtube.com/embed/ysz5S6PUM-U'
  },
];

export default function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [filters, setFilters] = useState({ title: '', rating: 0 });

  const filteredMovies = useMemo(() => {
    const t = filters.title.trim().toLowerCase();
    return movies.filter((m) => m.title.toLowerCase().includes(t) && m.rating >= filters.rating);
  }, [movies, filters]);

  function handleAdd(movie) {
    setMovies((prev) => [movie, ...prev]);
  }

  function handleDelete(id) {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  }

  // Home view contents reused inside the route element
  const Home = (
    <div className="app-container">
      <header>
        <h1>My Movie App</h1>
        <p>Add your favourites, then click a card to see description & trailer.</p>
      </header>

      <main>
        <AddMovieForm onAdd={handleAdd} />
        <section style={{ marginTop: 20 }}>
          <Filter filters={filters} onChange={setFilters} />
          <MovieList movies={filteredMovies} onDelete={handleDelete} />
        </section>
      </main>
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={Home} />
      {/* pass movies so MovieDetails can find the movie by id if needed */}
      <Route path="/movies/:id" element={<MovieDetails movies={movies} />} />
    </Routes>
  );
}
