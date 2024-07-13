import React, { useState } from "react";
import noteContext from "./noteContext";


const NoteState=(props)=>{

  const host="http://localhost:5000";

    const notesInitial=[]
      const [notes,setNotes]=useState(notesInitial);

      const getNotes=async ()=>{

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: "GET",
          headers: 
          {
          'Content-Type':'application/json',
          'auth-token': localStorage.getItem("token")
          }
        });

        const json=await response.json();
        setNotes(json);
        

      }

      const addNote=async (title,description,tag)=>{

        const response = await fetch(`${host}/api/notes/addnote`, {
          method: "POST",
          body: JSON.stringify({title,description,tag}),
          headers: 
          {
          'Content-Type':'application/json',
          'auth-token':  localStorage.getItem("token")
          }
        });

           
        
      
        const json = await response.json();
        setNotes(notes.concat(json));

           
        

      }
      const deleteNote= async (id)=>{

        const newNotes=notes.filter((note)=>{

         return note._id!==id;
        })

        setNotes(newNotes);
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
          method: "DELETE",
          headers: 
          {
          'Content-Type':'application/json',
          'auth-token': localStorage.getItem("token")
          }
        });
        

      }
      const editNote= async (id,title,description,tag)=>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        body: JSON.stringify({title,description,tag}),
        headers: 
        {
        'Content-Type':'application/json',
        'auth-token':  localStorage.getItem("token")
        }
      });
     




   let newNote=JSON.parse(JSON.stringify(notes));
        for (let index = 0; index < notes.length; index++) {
          const element = newNote[index];
          if(element._id===id)
          {
            newNote[index].title=title;
            newNote[index].description=description;
            newNote[index].tag=tag;
            break;
          }
          
        }
        setNotes(newNote);

      }
   
    
    
    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}} >
            { props.children}

        </noteContext.Provider>
    )
}
export default NoteState;

