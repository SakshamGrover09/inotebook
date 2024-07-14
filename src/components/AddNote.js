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
      <div className="row">
     
       <div className="col-md-4 border border-imp">
      <h1 className="pp ">Add a Note</h1>

      <form className="my-4">
        <div className="mb-3">
          <label  htmlFor="title" className="form-label pp">
          <h4>Title</h4>
          </label>
          <input
            type="text"
            onChange={onChange}
            className="form-control pp"
            placeholder="Enter title of minimum length 5...."
            id="title"
            value={note.title}
            name="title"
            aria-describedby="emailHelp"
            minLength={5} required
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label pp">
          <h4>Description</h4>
          </label>
          <input
            type="text"
            onChange={onChange}
            placeholder="Enter description of minimum length 5...."
            value={note.description}
            className="form-control pp"
            id="description"
            name="description"
            minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label pp">
            <h4>Tag</h4>
          </label>
          <input
            type="text"
            value={note.tag}
            onChange={onChange}
            placeholder="Enter tag..."
            className="form-control pp"
            id="tag"
            name="tag"
            minLength={5} required
          />
        </div>
        
        <button  disabled={note.title.length<5 || note.description.length<5}type="submit" onClick={handleClick}  className="buttonn my-3 pp mx-6 ">
          Add Note
        </button>
      </form>
      </div>
      
      <div className="col-md-2"></div>
      <div className="col-md-4">
     
    <img height="370" width="370" src="https://cdn-icons-png.freepik.com/512/9869/9869260.png"></img>
    <h3 className="mx-5 pp my-4">iNotebook Website</h3>

  </div>
  
      </div>
    </div>
  );
};

export default AddNote;
