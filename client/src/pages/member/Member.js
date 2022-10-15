import React from "react";
import Sidebar from "../../components/member/Sidebar";
import { Outlet } from "react-router-dom";

function Student({loggedInUser}){
   
  return(
    <> 
      <Sidebar/>
      <div className="studentPage">
        <div className="welcome">
          <h4>We are the Best Overdraft Platform!!</h4>
        </div>
        <Outlet className="outlet" />
      </div>
    </>
  )
}

export default Student