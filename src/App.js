
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';

function App() {
  return (
    <>
     <NoteState>
    <BrowserRouter>
        <Navbar />
        <Alert message="iNotebook is in building phase "/>
        
       <div className="container">
        <Routes>
          <Route
            exact
            path="/Home"
            element={<Home/>
              
            }
          ></Route>
          <Route
            exact
            path="/About"
            element={ <About/>
              
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
