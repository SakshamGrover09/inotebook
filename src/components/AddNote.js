import React ,{useContext, useState} from "react";
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {
  
  
    const context=useContext(noteContext);
    const {addNote}=context;
    const [note,setNote]=useState({title:"",description:"",tag:""});
    const handleClick=(e)=>{
      e.preventDefault(); //avoid page reload
      addNote(note.title,note.description,note.tag);
      setNote({title:"",description:"",tag:""});
      props.showAlert("Added Successfully","success")
      
    }
    const onChange=(e)=>{

      setNote({...note,[e.target.name]:e.target.value});

    }
  return (
    <div  className="container my-3" >
      
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
            placeholder="Enter title of minimum length 5"
            id="title"
            value={note.title}
            name="title"
            aria-describedby="emailHelp"
            minLength={5} required
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            onChange={onChange}
            placeholder="Enter description of minimum length 5"
            value={note.description}
            className="form-control"
            id="description"
            name="description"
            minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            value={note.tag}
            onChange={onChange}
            placeholder="Enter tag"
            className="form-control"
            id="tag"
            name="tag"
            minLength={5} required
          />
        </div>
        
        <button  disabled={note.title.length<5 || note.description.length<5}type="submit" onClick={handleClick}  className="btn btn-primary">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;
