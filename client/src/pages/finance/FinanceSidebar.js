import React from "react";
import { NavLink } from "react-router-dom";

function FinanceSidebar(){
   return(
    <div className="sidebar">
    <ul className="">
        <li><NavLink to={""}><span className="material-icons">space_dashboard</span>Payments</NavLink></li>
    </ul>    
    <div className="loggedInPanel">
    <h4>Finance</h4>
        </div>
    </div>
   )
}

export default FinanceSidebar