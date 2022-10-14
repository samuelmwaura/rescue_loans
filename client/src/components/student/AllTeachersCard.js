import React from "react";

function AllTeachersCard({loggedInUser}){
  return(
    <div className="dashboardCard">
    <span className ="material-icons">people</span>
    <h2><span>{(loggedInUser.registrations.length)*2}</span>Your Teachers</h2>
    </div>
  )

}

export default AllTeachersCard