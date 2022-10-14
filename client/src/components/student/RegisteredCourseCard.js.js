import React from "react";

function RegisteredCoursesCard({loggedInUser}){

  
  return(
    <div className="dashboardCard">
    <span className="material-icons">library_books</span>
    <h2><span>{loggedInUser.registrations.length}</span>Registered courses</h2>
    </div>
  )

}

export default RegisteredCoursesCard