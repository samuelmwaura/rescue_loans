import React, { useState} from "react";
import { NavLink, useNavigate} from "react-router-dom";
import Signup from "./Signup";



function Login({setShowNavbar,setLoggedInUser}){
 const [credentials,setCredentials] = useState({username:"",password:""})
 const [error,setError] = useState([])

 const navigate = useNavigate()

 function handleOnchange(event){
  setCredentials({...credentials,[event.target.name]:event.target.value})
 }

 function handleLogin(event){
  event.preventDefault()
   
  fetch("/login",{
    method:"POST",
    headers:{
    "content-Type":"Application/json",
    "Accept":"Application/json"
},
 body:JSON.stringify(credentials)
  })
  .then(response => {
    if (response.ok){
        response.json().then(user =>{
            setLoggedInUser(user)
            localStorage.setItem("loggedInUser",JSON.stringify(user)) //takes the js object of the user and converts it to a JSON string.
            setShowNavbar(true)
            navigate('/loans/all')
        })
    }
    else{
        response.json().then(error=>{
            setError(error.errors)
        })
    }
  }  

//   .then(data=>{
//         if(data){
//             localStorage.setItem("loggedInUser",JSON.stringify(data))//Setting the logged user to be persisted
//             setLoggedInUser(data)
//             if(data.registration_number){
//             navigate('/students/dashboard')
//              }else if(data.staff_number){
//             navigate('/teachers/dashboard')
//              }
//              else{
//             navigate("/finance/dashboard")
//              }
//         } 
//         setPassed(!passed)
//   })
  ).catch(error=>console.log(error))
}

   return(
    <div className="loginForm">  
        <form onSubmit={handleLogin}>
            <h2 className="title">Rescue Lender <span>Log in</span></h2>
            <label className="label">Username:</label><input type='text' name="username" className="formInput" value={credentials.username} onChange={handleOnchange} placeholder="Enter your Username" required/>
            <br />
            <br />
            <label className="label">Password:</label><input type='password' name="password" className="formInput" value={credentials.password} onChange={handleOnchange} placeholder="Enter Password" required /> 
            <br/>
            <br/>
            <section id="forgotPassword">
                <NavLink to="/signup" onClick={()=><Signup/>}>Sign up </NavLink>
            </section>
            <br/>
            <br />
            <div>
            <button className="submit" type="submit"> Log in</button>
            </div>
            <p>{error[0]}</p>
        </form>

    </div>
   )
}

export default Login