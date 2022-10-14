import React from "react";
import { NavLink } from "react-router-dom";

function TeacherSidebar(){
return(
    <div className="sidebar">
    <ul className="">
        <li><NavLink to={"dashboard"}><span className="material-icons">space_dashboard</span>Dashboard</NavLink></li>
        <li><NavLink to={"grade"}><span className="material-icons">grade</span>Grades</NavLink></li>
    </ul>    
    <div className="loggedInPanel">
    <h4>Teacher</h4>
        </div>
    </div>
)
}

export default TeacherSidebar  