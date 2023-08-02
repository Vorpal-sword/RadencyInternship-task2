import React from 'react';
import { useDispatch } from 'react-redux';
import { Note } from '../reducers/notesReducer';
import { removeNote, toggleArchive } from '../reducers/notesReducer';

interface Props {
  note: Note;
}

const NoteItem: React.FC<Props> = ({ note }) => {
  const dispatch = useDispatch();

  const handleArchiveToggle = () => {
    dispatch(toggleArchive(note.id));
  };

  const handleNoteRemoval = () => {
    dispatch(removeNote(note.id));
  };

  return (
    <li>
      <div>
        <h3>{note.title}</h3>
        <p>{note.content}</p>
        <button onClick={handleArchiveToggle}>
          {note.archived ? 'Unarchive' : 'Archive'}
        </button>
        <button onClick={handleNoteRemoval}>Remove</button>
      </div>
    </li>
  );
};

export default NoteItem;