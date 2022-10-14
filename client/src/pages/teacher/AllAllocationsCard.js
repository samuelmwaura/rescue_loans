import React from 'react'

function AllAllocationsCard({loggedInUser}) {
  return (
    <div className="dashboardCard">
        <span className="material-icons">auto_stories</span>
        <h2><span>{loggedInUser.allocations.length}</span>Allocated Courses</h2>
    </div>
  )
}

export default AllAllocationsCard