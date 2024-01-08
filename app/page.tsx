"use client"

import styles from './page.module.css'
import { useState } from "react";
import Note from "./Note";

let IDCount: number = 0;

type userNote = {
  id: number,
  text: string,
}

export default function Home() {
  const [notes, setNotes] = useState<Array<userNote>>([]);
  const [note, setNote] = useState<string>("")

  const addNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(note==""){return}
    setNotes([
      ...notes,
      {id: IDCount++, text: note}
    ])
    setNote("")
  }

  const deleteNote = (id: number) => {
    setNotes(notes.filter(e => e.id !== id));
  }

  const saveEdit = (e: userNote) => {
    const addEdit = notes.map(note => {
      return note.id === e.id ? {...note,text: e.text} : note;
    })
    setNotes(addEdit);
/*     setNotes({
      id: e.id,
      text: e.text
    }); */
  }

  return (
    <main className={styles.app}>
      <form className={styles.Form} onSubmit={addNote}>
        <input
          className={styles.TextField}
          type="text"
          onChange={e => setNote(e.target.value)}
          value={note}
          placeholder="Enter note here..."
          maxLength={64}
        />
        <button 
          className={styles.SubmitButton}
          type="submit"
        >Submit</button>
      </form>
      <div className={styles.NoteWindow}>
        {notes.map((e) => {
          return (
            <Note key={e.id} id={e.id} text={e.text} deleteNote={deleteNote} saveEdit={saveEdit}/>
          )
        })}
      </div>
    </main>
  )
}
