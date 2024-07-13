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





  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
    <div className="form-group">
  <label htmlFor="name">UserName</label>
  <input type="text" className="form-control" onChange={onChange} id="name" value={credentials.name} name="name" required minLength={3} placeholder="Enter name of min length 3"/>
 
</div>
<div className="form-group">
  <label htmlFor="email">Email address</label>
  <input type="email" className="form-control" onChange={onChange} id="email" value={credentials.email} name="email" aria-describedby="emailHelp" placeholder="Enter email"/>
 
</div>
<div className="form-group">
  <label htmlFor="password">Password</label>
  <input type="password" className="form-control" id="password" onChange={onChange} value={credentials.password} required minLength={5} name="password" placeholder="Enter password of min length 5"/>
</div>
<div className="form-group">
  <label htmlFor="cpassword">Confirm Password</label>
  <input type="password" className="form-control" id="cpassword" onChange={onChange} value={credentials.cpassword} required minLength={5} name="cpassword" placeholder="Enter Confirm Password"/>
</div>

<button type="submit" className="btn btn-primary my-2" >Sign Up</button>
</form>
</div>
  )
}

export default Signup