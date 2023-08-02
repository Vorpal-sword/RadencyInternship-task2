import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import NotesList from './NotesList';
import NoteForm from './NoteForm';

const NotesPage: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes);

  return (
    <div>
      <h1>Notes App</h1>
      <NoteForm />
      <NotesList notes={notes} />
    </div>
  );
};

export default NotesPage;