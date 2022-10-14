import React from 'react'
import { Outlet } from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar'

function Teacher({loggedInUser}) {
  
    return(
      <> 
        <TeacherSidebar/>
        <div className="studentPage">
          <div className="welcome">
            <h4>Welcome Teacher</h4>
            <h3>{loggedInUser.first_name}!</h3>
          </div>
          <Outlet className="outlet" />
        </div>
      </>
    )
  
}

export default Teacher