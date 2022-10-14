import React from "react";
import Editform from "../../components/student/EditForm";
import RegisterForm from "../../components/student/RegisterForm";

function Registrations({loggedInUser,courses,setloggedInUser}){

 function handleDelete(id){
   if(window.confirm("Confirm De-registration from the course.")){
      console.log(id)

      fetch(`https://transitacademyregistry.herokuapp.com/registrations/${id}`,{
         method:"DELETE"
      })
      .then(response=>response.json())
      .then(data=>{
         console.log(data)
         setloggedInUser(()=>{
            const remainingRegistrations = loggedInUser.registrations.filter(registration=>registration.id !== data.id)
            console.log(remainingRegistrations)
            return {...loggedInUser,registrations:remainingRegistrations}
         })
      })
      .catch(error=>console.error(error))
   }
   
   else{
      return null
   }
 }

   return(
      <div className="studentDashboard">
         <h1>Your Registrations</h1>
   <div id="table">
   <table className="table">
      <thead>
         <tr>
            <th>Course Name</th>
            <th>Course Code</th>
            <th>Current Grade</th>
            <th>Action</th>
         </tr>
      </thead>
      <tbody>         
         {loggedInUser.registrations.map(registration=>{
        return <tr key={registration.id}>
            <td>{registration.course.course_name}</td>
            <td>{registration.course.course_code}</td>
            <td>{registration.grade}</td>
            <td>{registration.grade === "Not Graded"?<button onClick={()=>handleDelete(registration.id)}>Delete</button>:null}</td>
         </tr>})}         
      </tbody>
   </table>   
   </div>
   <h1>Edit registrations</h1>
   <div id="editforms">
   <RegisterForm loggedInUser={loggedInUser} courses={courses} setloggedInUser={setloggedInUser}/>
   <Editform loggedInUser={loggedInUser} courses={courses} setloggedInUser={setloggedInUser}/>

   </div>
   </div>
   )
}

export default Registrations