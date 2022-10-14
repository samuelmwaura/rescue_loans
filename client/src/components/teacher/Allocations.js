import React from 'react'

function Allocations({loggedInUser}) {
 
const allRegistrations = loggedInUser.allocations.map(allocation => {
        return allocation.course.registrations //for each allocated course return the course and its registrations
      }).flat(1)

    return(
    <div className="studentDashboard">
     <div id="table">
     <table className="table">
        <thead>
           <tr>
              <th>Course Name</th>
              <th>Course Code</th>
           </tr>
        </thead>
        <tbody>         
           {loggedInUser.allocations.map(allocation=>{
          return <tr key={allocation.id}>
              <td>{allocation.course.course_name}</td>
              <td>{allocation.course.course_code}</td>
              </tr>})}         
        </tbody>
     </table>   

     <table className="table">
        
        <thead>
           <tr>
              <th>Course Name</th>
              <th>students name</th>
           </tr>
        </thead>
        <tbody>         
           {allRegistrations.map(registration=>{
          return <tr key={registration.id}>
              <td>{registration.course_name}</td>
              <td>{registration.student_name}</td>
              </tr>})}         
        </tbody>
     </table>  
     </div> 
     </div>
     )
}

export default Allocations