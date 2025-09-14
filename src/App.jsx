import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: 720, margin: '40px auto', padding: 16, border: '1px solid #ddd', borderRadius: 8 }}>
        <h1 style={{ marginBottom: 16 }}>Todo App (Redux)</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
