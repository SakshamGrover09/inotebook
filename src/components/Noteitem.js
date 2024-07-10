import React ,{useContext} from "react";
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
  const { note } = props;
  const context=useContext(noteContext);
  const {deleteNote}=context;

  return (
    <div className="col-md-3 my-2">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i class="fa-solid fa-trash mx-2" onClick={()=>{
            deleteNote(note._id);
          }}></i>
          <i class="fa-regular fa-pen-to-square mx-3" ></i>
         
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
