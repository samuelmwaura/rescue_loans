import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar(){
return(
    <div className="sidebar">
    <ul>
        <li><NavLink to={"all"}><span className="material-icons">real_estate_agent</span>loans</NavLink></li>
        <li><NavLink to={"applications"}><span className="material-icons">credit_score</span>Applications</NavLink></li>
        <li><NavLink to={"apply"}><span className="material-icons">payments</span>Apply</NavLink></li>
    </ul>    
    </div>
)
}

export default Sidebar  