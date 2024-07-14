import React ,{useState, } from 'react'
import { useNavigate } from 'react-router';

const Signup = (props) => {

  const host="http://localhost:5000";

    let navigate=useNavigate();

    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""});
    

    const onChange=(e)=>{

        setCredentials({...credentials,[e.target.name]:e.target.value});
    
      }
    

    const handleSubmit=async (e)=>{
        e.preventDefault();

        if(credentials.password!==credentials.cpassword)
        {
          props.showAlert("Passwords do not match","danger")
          
        }else{

        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            body: JSON.stringify({name:credentials.name,email:credentials.email ,password:credentials.password}),
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
              props.showAlert("Account created successfully","success")
              navigate("/home");

          }else{
              props.showAlert("Invalid Credentials","danger")
          }
        }
    }





  return (
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-3 border border-imp">
    <form onSubmit={handleSubmit}>
    
         
          <h2 className="pp mx-5">Sign in to continue....</h2>
    <div className="form-group my-2 ">
  <label  className="pp" htmlFor="name"><i class="fa-solid fa-circle-user"></i>  Username</label>
  <input type="text" className="form-control my-2 pp" onChange={onChange} id="name" value={credentials.name} name="name" required minLength={3} placeholder="Enter name of min length 3..."/>
 
</div>
<div className="form-group">
  <label  className="pp" htmlFor="email"><i class="fa-solid fa-envelope"></i>  Email address</label>
  <input type="email" className="form-control my-2 pp" onChange={onChange} id="email" value={credentials.email} name="email" aria-describedby="emailHelp" placeholder="Enter valid email..."/>
 
</div>
<div className="form-group">
  <label  className="pp" htmlFor="password"><i class="fa-solid fa-unlock"></i>  Password</label>
  <input type="password" className="form-control my-2 pp" id="password" onChange={onChange} value={credentials.password} required minLength={5} name="password" placeholder="Enter password of min length 5..."/>
</div>
<div className="form-group">
  <label  className="pp" htmlFor="cpassword"><i class="fa-solid fa-unlock"></i>  Confirm Password</label>
  <input type="password" className="form-control my-2 pp" id="cpassword" onChange={onChange} value={credentials.cpassword} required minLength={5} name="cpassword" placeholder="Enter Confirm Password..."/>
</div>

<button type="submit" className="buttonn my-3 pp  " >Sign Up </button>
</form>
</div>
<div className="col-md-3 ">
      
    <img height="500" width="335" src="https://img.freepik.com/free-photo/top-view-note-pad-colored-pencils-purple-background-with-copy-space_141793-11930.jpg"></img>

  </div>
<div className="col-md-3"></div>
</div>
  )
}

export default Signup