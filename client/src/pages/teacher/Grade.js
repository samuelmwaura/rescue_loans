import React, { useState } from "react"

function Grade({loggedInUser}){   
  const [selectedAllocationId,setSelectedAllocationId] = useState(0)
  const [courseGrades,setCourseGrades] = useState({})
  const [gradesPosted,setGradesPosted] = useState(false)

  const allRegistrations = loggedInUser.allocations.map(allocation => {
    return allocation.course.registrations //for each allocated course return the course and its registrations
  }).flat(1)

  const displayedRegistrations = allRegistrations.filter(registration => registration.course_id === parseInt(selectedAllocationId) )
 
function handleOnchange(event){
  setSelectedAllocationId(event.target.value)
  setCourseGrades({}) //Set all grades back to zero when the allocated course is changed
}

function handleGradeChange(event){   //Takes the property a the id of the registration and the value as the grade and sets in the object
 setCourseGrades({...courseGrades,[event.target.name]:event.target.value})
}

function handleSubmit(event){
 event.preventDefault()
  
 fetch("https://transitacademyregistry.herokuapp.com/registrations/grades",{
  method:"POST",
  headers:{
    "content-Type":"Application/json",
    "Accept":"Application/json"
  },
  body:JSON.stringify(courseGrades)
 })
 .then(response=>response.json())
 .then(data=>setGradesPosted(true))
 .catch(error=>console.log(error))
}

    return(          
      <div className="studentDashboard">
      <h1>Grade Your Students </h1> 
      <div>
      <div className="selectCourseToGrade">
        <label>Allocated Course:</label><select className="selector" onChange={handleOnchange} defaultValue={selectedAllocationId}>
        <option value={0}>Select course to grade</option>
        {loggedInUser.allocations.map(allocation=><option key={allocation.id} value={allocation.course_id}>{allocation.course.course_name}</option>)}
        </select>
        </div>
       <div>

        <form onSubmit={handleSubmit}>
        <table className="table">
      <thead>
         <tr>
            <th>Course Name</th>
            <th>Student Name</th>
            <th>Student Id</th>
            <th>Current Grade</th>
            <th>Grade course</th>
         </tr>
      </thead>
      <tbody>         
     {displayedRegistrations.map(registration=>
     <tr key={registration.id}>
        <td>{registration.course_name}</td>
        <td>{registration.student_name}</td>      
        <td>{registration.student_id}</td>
        <td>{registration.grade}</td>
        <td>{registration.grade === "Not Graded" ?
          <select className="gradeSelect" name={registration.id} onChange={handleGradeChange}>
          <option value="missing">Select</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
          </select>:null
        }</td>
      </tr>)}
      </tbody>
   </table>   
   <input id="submitGrade" type="submit" value="post Grades"/>
   <p style={{color:"green"}}>{gradesPosted?"Students graded Successfully":null}</p>
        </form>
       </div>
      </div> 
      </div> 
    )
}
export default Grade