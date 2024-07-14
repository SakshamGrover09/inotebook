import React ,{useContext} from "react";
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
  const { note , updateNote } = props;
  const context=useContext(noteContext);
  const {deleteNote}=context;

  return (
    
    <div className="col-md-3 my-2 ">
      <div className="card ccc">
        <div className="card-body">
          <h6 className="card-title pp">Title: {note.title}</h6>
          {<h6 className="pp" >Tag: {note.tag}</h6>}
          {<h6 className="pp" >Description: {note.description}</h6>}
          
          
          <i className="fa-solid fa-trash mx-2 pp" onClick={()=>{
            deleteNote(note._id);
            props.showAlert("Deleted Successfully","success")
          }}></i>
          <i className="fa-regular fa-pen-to-square mx-3 pp" onClick={()=>{updateNote(note)}} ></i>
          
         
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
