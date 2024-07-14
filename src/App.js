
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

function App() {
  const [alert,setAlert]=useState(null);

  document.body.style.backgroundImage="url('https://img.freepik.com/free-vector/hand-painted-watercolor-abstract-watercolor-background_23-2149012404.jpg')";
  
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);
  }
  return (
    <>
     <NoteState>
    <BrowserRouter>
        <Navbar />
        <Alert alert={alert}/>
        <Alert message="iNotebook is in building phase "/>
        
       <div className="container">
        <Routes>
          <Route
            exact
            path="/Home"
            element={<Home showAlert={showAlert}/>
              
            }
          ></Route>
          <Route
            exact
            path="/About"
            element={ <About/>
        
            }
          ></Route>
          <Route
            exact
            path="/login"
            element={ <Login showAlert={showAlert}/>
        
            }
          ></Route>
          <Route
            exact
            path="/signup"
            element={ <Signup showAlert={showAlert}/>
        
            }
          ></Route>
          
        </Routes>
        </div>
      </BrowserRouter>

      </NoteState>
    </>
  );
}

export default App;
