import { createSlice, nanoid } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: { items: [], filter: 'all' },
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(description) {
        return { payload: { id: nanoid(), description, isDone: false } };
      },
    },
    toggleDone(state, action) {
      const t = state.items.find((i) => i.id === action.payload);
      if (t) t.isDone = !t.isDone;
    },
    deleteTask(state, action) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    editTask(state, action) {
      const { id, description } = action.payload;
      const t = state.items.find((i) => i.id === id);
      if (t) t.description = description;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleDone, deleteTask, editTask, setFilter } = todosSlice.actions;
export default todosSlice.reducer;
