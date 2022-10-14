import React from "react";
import Sidebar from "../../components/member/Sidebar";
import { Outlet } from "react-router-dom";

function Student({loggedInUser}){
   let loggedInCategory
  if(loggedInUser.registration_number){
      loggedInCategory = "Student"
  }
  else{
      loggedInCategory = "Teacher"
 }
  return(
    <> 
      <Sidebar loggedInCategory={loggedInCategory}/>
      <div className="studentPage">
        <div className="welcome">
          <h4>We are the Best Overdraft Platform!!</h4>
        </div>
        <Outlet className="outlet" trust={loggedInUser.last_name}/>
      </div>
    </>
  )
}

export default Student