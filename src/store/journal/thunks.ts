import { setDoc, doc, collection } from "firebase/firestore/lite";
import { FireBaseDB } from "../../firebase/config";
import { AppDispatch, RootState } from "../store";
import {
  addNewEmptyNote,
  setActiveNote,
  isCreatinNewNote,
  setNotes,
  setSaving,
  updateNote,
} from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";

interface NewNote {
  id?: string;
  title: string;
  body: string;
  date: number;
  imageUrls: string[];
}

export const startNewNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(isCreatinNewNote());
    const { uid } = getState().auth;
    const newNote: NewNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageUrls: [],
    };
    const newDoc = doc(collection(FireBaseDB, `${uid}/journal/notes`));
    const setDocResponse = await setDoc(newDoc, newNote);
    console.log({ setDocResponse, newDoc });

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { uid } = getState().auth;

    if (!uid) return;
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const startSaveNote = () => {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(setSaving());
    const { uid } = getState().auth;
    const { active: activeNote } = getState().journal;
    
    if (!activeNote) return;

    const noteToSave = {
      ...activeNote,
    };
    delete noteToSave.id;

    const docRef = doc(
      collection(FireBaseDB, `${uid}/journal/notes`),
      activeNote.id
    );
    await setDoc(docRef, noteToSave, { merge: true });
    
    const updatedNote = {
      ...noteToSave,
      id: activeNote.id
    };
    
    dispatch(updateNote(updatedNote));
  };
};
