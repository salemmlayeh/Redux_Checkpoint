import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { setFilter } from '../slices/todosSlice';

function ListTask() {
  const { items, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filtered = items.filter(
    (t) => filter === 'all' || (filter === 'done' && t.isDone) || (filter === 'not' && !t.isDone)
  );

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={() => dispatch(setFilter('all'))} style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}>
          All ({items.length})
        </button>
        <button onClick={() => dispatch(setFilter('done'))} style={{ fontWeight: filter === 'done' ? 'bold' : 'normal' }}>
          Done ({items.filter((i) => i.isDone).length})
        </button>
        <button onClick={() => dispatch(setFilter('not'))} style={{ fontWeight: filter === 'not' ? 'bold' : 'normal' }}>
          Not done ({items.filter((i) => !i.isDone).length})
        </button>
      </div>

      <div>
        {filtered.length === 0 ? (
          <div>No tasks</div>
        ) : (
          filtered.map((t) => <Task key={t.id} task={t} />)
        )}
      </div>
    </div>
  );
}

export default ListTask;
