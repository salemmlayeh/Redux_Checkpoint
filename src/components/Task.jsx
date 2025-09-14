import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, deleteTask, editTask } from '../slices/todosSlice';

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(task.description);

  const save = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(editTask({ id: task.id, description: trimmed }));
    setIsEditing(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 8, borderBottom: '1px solid #eee' }}>
      <input type="checkbox" checked={task.isDone} onChange={() => dispatch(toggleDone(task.id))} />

      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} style={{ flex: 1, padding: 6 }} />
          <button onClick={save}>Save</button>
          <button
            onClick={() => {
              setIsEditing(false);
              setText(task.description);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <div style={{ flex: 1, textDecoration: task.isDone ? 'line-through' : 'none' }}>{task.description}</div>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </>
      )}
    </div>
  );
}

export default Task;
