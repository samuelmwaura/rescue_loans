import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Signup(){
    const [credentials,setCredentials] = useState({username:"",password:"",passwordConfirmation:""})
    const [error,setErrors] = useState(null)
    const [success, setSuccess] = useState("")

    function handleOnchange(event){
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

    function handleSubmit(event){
    event.preventDefault()
    fetch("/users",{
        method:"POST",
        headers:{
          "content-Type":"Application/json",
          "Accept":"Application/json"
        },
        body:JSON.stringify({
            username:credentials.username,
            password:credentials.password,
            password_confirmation:credentials.passwordConfirmation  //This will make it possble for the backend ruby to decipher the bit of passwords to confirm
        })
    })
    .then(response=>{
        if(response.ok){
          response.json().then(data=>{
            setSuccess(data.success)})
            setCredentials({username:"",password:"",passwordConfirmation:""})
            setTimeout(()=>{
                setSuccess("")
                setErrors(null)
            },10000)
        }else{
          response.json().then(error=>setErrors(error.errors))
        }
    })
    }

return (
    <div className="loginForm">  
    <form onSubmit={handleSubmit}>
        <h2 className="title">Rescue Lender <span>Sign up</span></h2>
        <label className="label">Username:</label><input type='text' name="username" className="formInput" value={credentials.username} onChange={handleOnchange} placeholder="Enter your Username" required/>
        <br />
        <br />
        <label className="label">Password:</label><input type='password' name="password" className="formInput" value={credentials.password} onChange={handleOnchange} placeholder="Enter Password" required /> 
        <br/>
        <br/>
        <label className="label">Confirm:</label><input type='password' name="passwordConfirmation" className="formInput" value={credentials.passwordConfirmation} onChange={handleOnchange} placeholder="Confirm Password" required /> 
        <section id="forgotPassword">
            <NavLink to="/">Go to Login</NavLink>
        </section>
        <br/>
        <br />
        <div>
        <button className="submit" type="submit"> Signup </button>
        </div>
        <ul className="errors">
         {success?<p style={{color:"green"}}>{success}</p>:error?error.map(error=><li key={error}>{error}</li>):null}
         </ul>
    </form>

</div>
)
}
export default Signup