import styles from "./page.module.css";
import { FunctionComponent as FC } from "react";

type userNote = {
    id: number,
    text: string
    deleteNote: (id: number) => void;
  }

const  Note: FC<userNote> = ({id, text, deleteNote}) => {
    return (
        <div className={styles.Note}>
            <p>{text}</p>
            <img src="../Delete.png" className={styles.DeleteIcon} onClick={() => deleteNote(id)}/>
        </div>
    )
}

export default Note;