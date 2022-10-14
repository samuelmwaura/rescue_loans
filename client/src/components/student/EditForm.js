import React,{useState} from "react";

function Editform({loggedInUser,courses,setloggedInUser}){
   const [updateDetails,setUpdateDetails] = useState({id:"",course_id:""})
   const [upDated,setUpdated] = useState(false)
    
   function handleOnchange(event){
   setUpdateDetails({...updateDetails,[event.target.name]:event.target.value})
   }

   function handleOnsubmit(event){
     event.preventDefault()

     fetch(`https://transitacademyregistry.herokuapp.com/registrations/${updateDetails.id}`,{
        method:"PATCH",
        headers:{
            "content-Type":"Application/json",
            "Accept":"Application/json"
        },
        body:JSON.stringify(updateDetails)
     })
     .then(response =>response.json())
     .then(data=>{
        setUpdated(true)
        setloggedInUser(()=>{
            //was a lot of fun comming up with this piece of code
         const  newRegistrations = loggedInUser.registrations.map(registration =>{
            if(registration.id === data.id) registration = data
            return registration
        })
            return {...loggedInUser,registrations:newRegistrations}
        })
     })
     .catch(error=>console.log(error))
   }


    return (
        <form className="registerForm" onSubmit={handleOnsubmit}>
            <h3 className="title">Edit A registration</h3>
            <label >Name:</label><input type='text' name="student_name" value={loggedInUser.first_name +"  "+ loggedInUser.last_name} required readOnly />
            <br />
            <br />
            <label>Course Name</label><select name="id" onChange={handleOnchange} value={updateDetails.id}> 
            <option>Select Current Course</option>
            {loggedInUser.registrations.map(registration=><option value={registration.id} key={registration.id}>{registration.course.course_name}</option>)}            
            </select>
            <br />
            <br />
            <label>New Course</label><select name="course_id" onChange={handleOnchange} value={updateDetails.course_id}> 
            <option>Select New Course</option>
            {courses.map(course=><option value={course.id} key={course.id}>{course.course_name}</option>)}            
            </select>
            <br />
            <br />
            <div>
            <input type="submit" />
            </div>  
           <p>{upDated?"Registration updated successfully.":null}</p>
        </form>
    )
}

export default Editform