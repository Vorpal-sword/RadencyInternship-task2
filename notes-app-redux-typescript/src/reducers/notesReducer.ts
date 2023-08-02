import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Note {
  id: string;
  title: string;
  content: string;
  archived: boolean;
}

const prepopulatedNotes: Note[] = [
  { id: '1', title: 'Note 1', content: 'Content of Note 1', archived: false },
  { id: '2', title: 'Note 2', content: 'Content of Note 2', archived: false },
];

const notesSlice = createSlice({
  name: 'notes',
  initialState: prepopulatedNotes,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
    },
    editNote: (state, action: PayloadAction<Note>) => {
      const { id, title, content } = action.payload;
      const note = state.find((note) => note.id === id);
      if (note) {
        note.title = title;
        note.content = content;
      }
    },
    removeNote: (state, action: PayloadAction<string>) => {
      return state.filter((note) => note.id !== action.payload);
    },
    toggleArchive: (state, action: PayloadAction<string>) => {
      const note = state.find((note) => note.id === action.payload);
      if (note) {
        note.archived = !note.archived;
      }
    },
  },
});

export const { addNote, editNote, removeNote, toggleArchive } = notesSlice.actions;
export default notesSlice.reducer;