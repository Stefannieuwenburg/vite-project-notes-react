import { MdDelete } from "react-icons/md";


const Note = ({id,text,date,handleDeleteNote}) => {
    return (
        <>
            <div className="note">
                <span>{text}</span>
                <div className="note-footer">
                    <small>{date}</small>
                    <MdDelete onClick={()=> handleDeleteNote(id)} className="delete-icon" size="1.8em" color="red"/>
                </div>
            </div>
        </>
    );
}
 export default Note;
