import React from 'react';
import { Note } from '../reducers/notesReducer';
import NoteItem from './NoteItem';

interface Props {
  notes: Note[];
}

const NotesList: React.FC<Props> = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} />
      ))}
    </ul>
  );
};

export default NotesList;