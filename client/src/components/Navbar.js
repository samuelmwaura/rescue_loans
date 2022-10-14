import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({loggedInUser,setLoggedInUser}){
  
 const navigate = useNavigate()

 function handleOnClick(){
  localStorage.clear()
  setLoggedInUser(null)
   navigate('/')
 }

    return(
      <nav className="navbar">
        <h1>Rescue Loans</h1>
        <p onClick={handleOnClick}>{loggedInUser?<span className="material-icons">logout</span>:null}</p>             
      </nav>
    )
}

export default Navbar

// <NavLink to={'/students'}>Students</NavLink>
// <NavLink to={'/grades'}>Grades</NavLink>