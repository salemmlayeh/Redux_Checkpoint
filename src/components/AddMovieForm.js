import React, { useState } from 'react';

export default function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [posterURL, setPosterURL] = useState('');
  const [rating, setRating] = useState(3);
  const [trailerLink, setTrailerLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim()) return alert('Title is required');
    const movie = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim() || 'No description',
      posterURL: posterURL.trim() || `https://via.placeholder.com/600x800?text=${encodeURIComponent(title.trim())}`,
      rating: Number(rating),
      trailerLink: trailerLink.trim() || 'https://www.youtube.com/embed/ysz5S6PUM-U'
    };
    onAdd(movie);
    setTitle(''); setDescription(''); setPosterURL(''); setRating(3); setTrailerLink('');
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: 'white', padding: 12, borderRadius: 8 }}>
      <h3>Add a new movie</h3>
      <div style={{ display: 'grid', gap: 8, gridTemplateColumns: '1fr 1fr', marginTop: 8 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <input value={posterURL} onChange={(e) => setPosterURL(e.target.value)} placeholder="Poster URL (optional)" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description (optional)" style={{ gridColumn: '1 / -1' }} />
        <input value={trailerLink} onChange={(e) => setTrailerLink(e.target.value)} placeholder="Trailer embed URL (https://www.youtube.com/embed/VIDEO_ID)" />
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <label>Rating:</label>
          <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
      </div>

      <div style={{ marginTop: 10 }}>
        <button type="submit">Add movie</button>
        <button type="button" onClick={() => { setTitle(''); setDescription(''); setPosterURL(''); setRating(3); setTrailerLink(''); }} style={{ marginLeft: 8 }}>
          Clear
        </button>
      </div>
    </form>
  );
}
