import React , {useEffect} from 'react'
import { Link , useLocation , useNavigate} from 'react-router-dom'

const Navbar = () => {

  let location=useLocation();
  let navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/login")
  }
  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNotebook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/Home"? "active":"" } `} aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/About"? "active":"" }`} to="/About">About</Link>
        </li>
       
          
        
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link to="/login" className="btn btn-outline-light mx-1"  role="button" >Login</Link>
      <Link to="/signup" className="btn btn-outline-light mx-1"  role="button" >Sign Up</Link>
     
      </form>:<button onClick={handleLogout} className="btn btn-outline-light mx-1">Logout</button>}
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar