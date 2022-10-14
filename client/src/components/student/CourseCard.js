import React from "react";

function CourseCard({courseCode,courseName}){
return(
    <div className="courseCard">
        <p>{courseCode}</p>
        <p>{courseName}</p>
    </div>
)

}

export default CourseCard