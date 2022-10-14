import React from 'react'

function AllStudentsCard({loggedInUser}) {

const allStudents = loggedInUser.allocations.map(allocation => {
  return allocation.course.registrations //for each allocated course return the course and its registrations
}).flat(1) //flat1 flattens the return array because it is an array of 2 arrays

  return (
   <div className="dashboardCard">
        <span className="material-icons">people</span>
        <h2><span>{allStudents.length}</span>Total Student audience</h2>
    </div>
  )
}

export default AllStudentsCard