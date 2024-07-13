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
    <div className="container">
        <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control" onChange={onChange} id="email" value={credentials.email} name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
     
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} name="password" placeholder="Password"/>
    </div>
    
    <button type="submit" className="btn btn-primary my-2" >Login</button>
  </form></div>
  )
}

export default Login