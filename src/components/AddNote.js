import React ,{useContext, useState} from "react";
import noteContext from '../context/notes/noteContext'

const AddNote = () => {
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:"default"});
    const handleClick=(e)=>{
      e.preventDefault();    //avoid page reload
      addNote(note.title,note.description,note.tag);
    }
    const onChange=(e)=>{

      setNote({...note,[e.target.name]:e.target.value});

    }
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>

      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            onChange={onChange}
            className="form-control"
            id="title"
            name="title"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={onChange}
            className="form-control"
            id="description"
            name="description"
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" onClick={handleClick}  className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
