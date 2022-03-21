import {useState} from 'react'

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const charactorLimit = 200;


    const handleChange = (e) => {
        if (charactorLimit - e.target.value.length >= 0) {
            setNoteText(e.target.value);
        }
    }


    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText("");
        }
    }

    return (
        <>
            <div className="note new">
                <textarea
                    row="8"
                    cols="10"
                    placeholder="Write your note..."
                    value={noteText}
                    onChange={handleChange}
                ></textarea>
                <div className="note-footer">
                    <small>{charactorLimit - noteText.length }</small>
                    <button className="save" onClick={handleSaveClick}>
                        Save
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default AddNote;

