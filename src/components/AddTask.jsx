import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/todosSlice';

function AddTask() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTask(trimmed));
    setText('');
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
        style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>
        Add
      </button>
    </form>
  );
}

export default AddTask;
