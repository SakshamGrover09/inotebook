import React , {useEffect} from 'react'
import { Link  , useNavigate} from 'react-router-dom'

const Navbar = () => {

 
  let navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-company-purple">
  <div className="container-fluid">
     <h2 className="ppp">iNotebook</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active `} aria-current="page" to="/Home"><i class="fa-solid fa-house"></i>  Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active`} to="/About"><i class="fa-solid fa-file-lines"></i>   About</Link>
        </li>
       
          
        
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link to="/login" className="btn btn-outline-light mx-1"  role="button" > <i class="fa-solid fa-user"></i> Login</Link>
      <Link to="/signup" className="btn btn-outline-light mx-1"  role="button" > <i class="fa-regular fa-user"></i> Sign Up</Link>
     
      </form>:<button onClick={handleLogout} className="btn btn-outline-light mx-1"> <i class="fa-regular fa-user"></i>  Logout</button>}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar