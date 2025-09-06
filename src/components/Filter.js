import React from 'react';

export default function Filter({ filters, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
      <div>
        <label style={{ marginRight: 6 }}>Title:</label>
        <input
          value={filters.title}
          onChange={(e) => onChange({ ...filters, title: e.target.value })}
          placeholder="Search by title"
        />
      </div>

      <div>
        <label style={{ marginRight: 6 }}>Min rating:</label>
        <select value={filters.rating} onChange={(e) => onChange({ ...filters, rating: Number(e.target.value) })}>
          <option value={0}>All</option>
          <option value={1}>1+</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
          <option value={5}>5</option>
        </select>
      </div>

      <button onClick={() => onChange({ title: '', rating: 0 })}>Reset</button>
    </div>
  );
}
