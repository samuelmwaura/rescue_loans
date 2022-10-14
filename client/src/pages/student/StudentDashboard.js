import React from "react";
import AllTeachersCard from "../../components/student/AllTeachersCard.js";
import CourseCard from "../../components/student/CourseCard.js";
import PaymentsCard from "../../components/student/PaymentsCard.js";
import RegisteredCoursesCard from "../../components/student/RegisteredCourseCard.js.js";

function StudentDashboard({courses, loggedInUser,studentPayments,setStudentPayments}){
return (
   <> 
   <div className="studentDashboard">
    <h1>Summaries </h1>
   <div id="summaries">
   <RegisteredCoursesCard loggedInUser={loggedInUser}/>
   <AllTeachersCard loggedInUser={loggedInUser}/>
   <PaymentsCard loggedInUser={loggedInUser} studentPayments={studentPayments} setStudentPayments={setStudentPayments}/>
   </div>
   <h1>Campaign courses</h1>
   <div id="courses">
    {courses.map(course=><CourseCard key={course.id} courseCode={course.course_code} courseName={course.course_name}/>)}
   </div>
   
   </div> 
    </> 
)

}

export default StudentDashboard