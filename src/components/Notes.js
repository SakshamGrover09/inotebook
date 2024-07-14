import React ,{useContext,useState, useEffect , useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem'

const Notes = (props) => {
    let navigate=useNavigate();
    const context=useContext(noteContext);
   const {notes,getNotes,editNote}=context;
   useEffect(() => {
    if(localStorage.getItem('token'))
    {
      getNotes()
    }else{
      props.showAlert("  Login to Continue...","danger")
      navigate("/login");
    }
   
     
   }, [])
   const [note,setNote]=useState({eid:"",etitle:"",edescription:"",etag:"default"});
   const ref=useRef(null);
   const refc=useRef(null);
   
   const updateNote=(currentNote)=>{
     ref.current.click();
     setNote({eid:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
     
   }

   const handleClick=(e)=>{
     editNote(note.eid,note.etitle,note.edescription,note.etag)
    refc.current.click();
    props.showAlert("Updated Successfully","success")
  
    
  }
  const onChange=(e)=>{

    setNote({...note,[e.target.name]:e.target.value});

  }

  
  return (
    <>
    <AddNote showAlert={props.showAlert}/>
    

  
<button type="button" className="btn btn-primary d-none"  ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content cc">
      <div className="modal-header">
        <h1 className="modal-title fs-5 pp" id="exampleModalLabel">Edit Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
      <form className="my-3">
        <div className="mb-3">
          <label htmlFor="title" className="form-label pp">
            Title
          </label>
          <input
            type="text"
            value={note.etitle}
            onChange={onChange}
            className="form-control pp"
            id="etitle"
            name="etitle"
            aria-describedby="emailHelp"
            minLength={5} required
          />
          
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label pp">
            Description
          </label>
          <input
            type="text"
            onChange={onChange}
            value={note.edescription}
            className="form-control pp"
            id="edescription"
            name="edescription"
            minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label pp">
            Tag
          </label>
          <input
            type="text"
            onChange={onChange}
            value={note.etag}
            className="form-control pp"
            id="etag"
            name="etag"
            minLength={5} required
          />
        </div>
       
        
      </form>
      </div>
      <div className="modal-footer">
        <button type="button" ref={refc} className="buttonn pp" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" onClick={handleClick} className="buttonn my-3 pp mx-6">Update Note</button>
      </div>
    </div>
  </div>
</div>



    <div>
        <div className="row">
        <h2 className="pp">Your Notes</h2>
        <div className="container mx-1 pp">
        {notes.length===0 && "No Notes To Display"}
        </div>
        {notes.map((note) => {
                    return <Noteitem key={note._id} showAlert={props.showAlert}updateNote={updateNote} note={note} />
                })}
      
      
      
        
      </div>
    </div>
    </>
  )
}

export default Notes