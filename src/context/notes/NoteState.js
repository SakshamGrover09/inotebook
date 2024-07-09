import React, { useState } from "react";
import noteContext from "./noteContext";


const NoteState=(props)=>{

    const notesInitial=[
        {
          "_id": "6686de96180cd18f07106908",
          "user": "668443a23dba17b85ab1a056",
          "title": "Meri Zindagi",
          "description": "Its about me",
          "tag": "Personal",
          "date": "2024-07-04T17:40:38.592Z",
          "__v": 0
        },
        {
          "_id": "6686df859ca5ed81a7a775a6",
          "user": "668443a23dba17b85ab1a056",
          "title": "Meri Zindagi",
          "description": "Its about me",
          "tag": "Personal",
          "date": "2024-07-04T17:44:37.006Z",
          "__v": 0
        }
        ,
        {
          "_id": "6686df859ca5ed81a7a775a6",
          "user": "668443a23dba17b85ab1a056",
          "title": "Meri Zindagi",
          "description": "Its about me",
          "tag": "Personal",
          "date": "2024-07-04T17:44:37.006Z",
          "__v": 0
        }
        ,
        {
          "_id": "6686df859ca5ed81a7a775a6",
          "user": "668443a23dba17b85ab1a056",
          "title": "Meri Zindagi",
          "description": "Its about me",
          "tag": "Personal",
          "date": "2024-07-04T17:44:37.006Z",
          "__v": 0
        }
        ,
        {
          "_id": "6686df859ca5ed81a7a775a6",
          "user": "668443a23dba17b85ab1a056",
          "title": "Meri Zindagi",
          "description": "Its about me",
          "tag": "Personal",
          "date": "2024-07-04T17:44:37.006Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(notesInitial);
   
    
    
    return(
        <noteContext.Provider value={{notes,setNotes}} >
            { props.children}

        </noteContext.Provider>
    )
}
export default NoteState;