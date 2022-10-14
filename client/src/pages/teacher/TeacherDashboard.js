import React from 'react'
import Allocations from '../../components/teacher/Allocations';
import AllAllocationsCard from './AllAllocationsCard'
import AllStudentsCard from './AllStudentsCard';

function TeacherDashboard({loggedInUser,aTeacherStudents}) {

    

  return (
         
      <div className="studentDashboard">
      <h1>Summaries </h1> 
      <div id="summaries">
        <AllStudentsCard loggedInUser={loggedInUser}/>
       <AllAllocationsCard loggedInUser={loggedInUser}/>
      </div>

      <h1>Allocation details</h1>
      <Allocations loggedInUser={loggedInUser}/>      
      </div> 
  )
}

export default TeacherDashboard