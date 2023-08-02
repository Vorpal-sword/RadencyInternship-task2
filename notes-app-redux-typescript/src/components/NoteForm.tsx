import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../reducers/notesReducer';

const NoteForm: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      archived: false,
    };

    dispatch(addNote(newNote));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;