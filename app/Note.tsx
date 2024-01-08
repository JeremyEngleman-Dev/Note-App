"use client"

import styles from "./page.module.css";
import { ChangeEvent, EventHandler, FunctionComponent as FC, FormEvent } from "react";
import { useState } from "react";

type userNote = {
    id: number,
    text: string,
  }

interface userNoteFull extends userNote {
    deleteNote: (id: number) => void,
    saveEdit: (e: userNote) => void
}

const  Note: FC<userNoteFull> = ({id, text, deleteNote, saveEdit}) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [note, setNote] = useState<userNote>({
        id: id,
        text: text
    });

    const handleEditBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNote({
            id: id,
            text: event.currentTarget.value
        });
    }

    const enableEdit = () => {
        return isEditable === false ? setIsEditable(true) : null;
    }

    return (
        <div className={styles.Note}>
            <div className={styles.TextArea}>
                <input type="text" value={note.text} className={styles.EditBox} onChange={handleEditBoxChange} hidden={!isEditable}/>
                <p>{text}</p>
            </div>
            <div className={styles.Controls}>
                <img src="../Edit.png" className={styles.Icon} onClick={() => enableEdit()} hidden={isEditable}/>
                <img src="../Delete.png" className={styles.Icon} onClick={() => deleteNote(id)} hidden={isEditable}/>
                <img src="../Save.png" className={styles.Icon} onClick={() => {saveEdit(note), setIsEditable(false)}} hidden={!isEditable}/>
            </div>
        </div>
    )
}

export default Note;