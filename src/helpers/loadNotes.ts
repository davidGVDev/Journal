import { FireBaseDB } from "../firebase/config"

import { collection, getDocs } from "firebase/firestore/lite"

interface NewNote {
    id?: string;
    title: string;
    body: string;
    date: number;
}
export const loadNotes = async (uid: string) => {
    if (!uid) throw new Error('User ID is required')
    const collectionRef = collection(FireBaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)
    const notes: NewNote[] = []
    docs.forEach(doc => {
        notes.push({ id: doc.id, ...doc.data() as NewNote })
    })
    return notes
}

