import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const host="http://localhost:5000";

    let navigate=useNavigate();

    const [credentials,setCredentials]=useState({email:"",password:""});
    

    const onChange=(e)=>{

        setCredentials({...credentials,[e.target.name]:e.target.value});
    
      }
    

    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            body: JSON.stringify({email:credentials.email ,password:credentials.password}),
            headers: 
            {
            'Content-Type':'application/json'
            }
          });
          const json=await response.json();
          console.log(json);
          if(json.success)
          {
               localStorage.setItem("token",json.authToken);
               let a=localStorage.getItem("token");
               console.log(a);
              
              
              props.showAlert("Logged in successfully","success")
              navigate("/home");

          }else{
            props.showAlert("Invalid Credentials","danger")
          }
    }

  return (
    <div className="row">
      <div className="col-md-3 ">
        </div>
     
      <div className="col-md-3 ">
      
    <img height="420" width="320" src="https://img.freepik.com/free-photo/top-view-note-pad-colored-pencils-purple-background-with-copy-space_141793-11930.jpg"></img>

  </div>
  
      <div className="col-md-3 border border-imp">
   
        <form onSubmit={handleSubmit}>
          <h1 className="pp mx-1">Welcome  </h1>
          <h1 className="pp mx-1"> Back!! </h1>
          <h3 className="pp mx-1">Login here.....</h3>
          
    <div className="form-group my-3">
      <label className="pp" htmlFor="email"><i class="fa-solid fa-envelope"></i>  Email address</label>
      <input type="email" className="form-control my-2 pp" onChange={onChange} id="email" value={credentials.email} name="email" aria-describedby="emailHelp" placeholder="Enter email address...."/>
     
    </div>
    <div className="form-group my-2">
      <label className="pp" htmlFor="password"><i class="fa-solid fa-unlock"></i>  Password</label>
      <input type="password" className="form-control my-2 pp" id="password" onChange={onChange} value={credentials.password} name="password" placeholder="Enter password...."/>
    </div>
    
    <button type="submit"   className="buttonn my-3 pp mx-6 " >Login    </button>
    
  </form>
  
  </div>
  <div className="col-md-3 ">
        </div>
  
 
  </div>
  

  )
}

export default Login