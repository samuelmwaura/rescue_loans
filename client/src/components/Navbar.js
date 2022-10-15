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
        <h1><span className="material-icons">real_estate_agent</span>Rescue Lender</h1>
        <div>
        <p onClick={handleOnClick}>{loggedInUser?<span className="material-icons">logout</span>:null}</p> 
       {loggedInUser?`logged in as ${loggedInUser.username}`:null}
       </div>
        
      </nav>
    ) 
}

export default Navbar

// <NavLink to={'/students'}>Students</NavLink>
// <NavLink to={'/grades'}>Grades</NavLink>