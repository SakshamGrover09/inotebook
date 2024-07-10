import React ,{useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import Noteitem from './Noteitem'

const Notes = () => {
    const context=useContext(noteContext);
   const {notes,getNotes}=context;
   useEffect(() => {
     getNotes()
     
   }, [])
   
  return (
    <>
    <AddNote/>
    <div>
        <div className="row">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return <Noteitem key={note._id} note={note}/>
        })
      }
        
      </div>
    </div>
    </>
  )
}

export default Notes