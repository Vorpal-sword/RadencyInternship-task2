import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import NotesPage from './components/NotesPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NotesPage />
    </Provider>
  );
};

export default App;