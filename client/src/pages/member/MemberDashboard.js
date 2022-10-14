import React from "react";

function MemberDashboard({loans, loggedInUser,studentPayments,setStudentPayments}){
return (
   <> 
   <div className="studentDashboard">
    <h1>Summaries </h1>
   <div id="summaries">
   {/* The table of all loans goes here */}
   </div>
   <h1>Campaign courses</h1>
   <div id="courses">
    {/* {loans.map(loan=><CourseCard key={loan.id} courseCode={loan.id} courseName={loan.name}/>)} */}
   </div>
   
   </div> 
    </> 
)

}

export default MemberDashboard