import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NewNote {
  id?: string;
  title: string;
  body: string;
  date: number;
}

interface JournalState {
  isSaving: boolean;
  messageSaved: string;
  notes: NewNote[];
  active: NewNote | null;
}

const initialState: JournalState = {
  isSaving: false,
  messageSaved: "",
  notes: [],
  active: null,
  // activeNote:{
  //     id: 'ABC123',
  //     title: '',
  //     body: '',
  //     date: 123456789,
  //     imageUrls: [],
  // }
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    isCreatinNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action: PayloadAction<NewNote>) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action: PayloadAction<NewNote>) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action: PayloadAction<NewNote[]>) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";  
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });

      if (state.active && state.active.id === action.payload.id) {
        state.active = action.payload;
      }
      state.messageSaved = `${action.payload.title}, actualizada correctamente`;
    },
    deleteNoteById: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  isCreatinNewNote,
} = journalSlice.actions;
