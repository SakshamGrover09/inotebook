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
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NDQzYTIzZGJhMTdiODVhYjFhMDU2In0sImlhdCI6MTcyMDEwNzY3M30.jl9_odSH53H7wU-6DhRORZ9z9CTcolQpGRvjzsOuiOw'
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
          'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NDQzYTIzZGJhMTdiODVhYjFhMDU2In0sImlhdCI6MTcyMDEwNzY3M30.jl9_odSH53H7wU-6DhRORZ9z9CTcolQpGRvjzsOuiOw'
          }
        });

            let note= {
              "_id": "6686df98m59ca5ed81a7ah775a6",
              "user": "668443a23dba17b85ab1a056",
              "title": title,
              "description": description,
              "tag": tag,
              "date": "2024-07-04T17:44:37.006Z",
              "__v": 0
            }
        setNotes(notes.concat(note))

      }
      const deleteNote=(id)=>{

        const newNotes=notes.filter((note)=>{

         return note._id!==id;
        })

        setNotes(newNotes);

      }
      const editNote= async (id,title,description,tag)=>{

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        body: JSON.stringify({title,description,tag}),
        headers: 
        {
        'Content-Type':'application/json',
        'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY4NDQzYTIzZGJhMTdiODVhYjFhMDU2In0sImlhdCI6MTcyMDEwNzY3M30.jl9_odSH53H7wU-6DhRORZ9z9CTcolQpGRvjzsOuiOw'
        }
      });
      // const json=response.json();





        for (let index = 0; index < notes.length; index++) {
          const element = notes[index];
          if(element._id===id)
          {
            element.title=title;
            element.description=description;
            element.tag=tag;
          }
          
        }

      }
   
    
    
    return(
        <noteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}} >
            { props.children}

        </noteContext.Provider>
    )
}
export default NoteState;

