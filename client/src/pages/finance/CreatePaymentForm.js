import React, {useState,useEffect } from "react";

function CreatePaymentForm({studentPayments,setStudentPayments}){
const [allStudents,setAllStudents] = useState([])
const [paymentDetails,setPaymentDetails] = useState({student_name:"",amount:0,student_id:0})
const [isCreated,setIsCreated] = useState(false)

useEffect(()=>{
    fetch("https://transitacademyregistry.herokuapp.com/students")
    .then(response=> response.json())
    .then(data=>{
        setAllStudents(data)
    })
    .catch(error=>console.log(error))
},[])

function handleOnchange(event){
setPaymentDetails({...paymentDetails,[event.target.name]:event.target.value})
}

function handleNameOnchange(event){
const studentDetails = event.target.value.split(",")
setPaymentDetails({...paymentDetails,student_name:[studentDetails[0],studentDetails[1]].join(" "),student_id:parseInt(studentDetails[2])})
}

function handleOnsubmit(event){
event.preventDefault()
fetch("https://transitacademyregistry.herokuapp.com/payments",{
    method:"POST",
    headers:{
        "Content-Type":"Application/json",
        "Accept":"Application/json"
    },
    body:JSON.stringify(paymentDetails)
})
.then(response=>response.json())
.then(data=>{
    setStudentPayments([...studentPayments,data])
    setIsCreated(true)
})
.catch(error=>console.log(error))
}

   return (<form className="registerForm" onSubmit={handleOnsubmit}>
            <h3 className="title">Register a Student Payment</h3>
            <label>Amount:</label><input type='number' name="amount" onChange={handleOnchange} value={paymentDetails.amount} required/>
            <br />
            <br />
            <label>Student Name</label><select name="course_id" onChange={handleNameOnchange} required> 
            <option>Select a Student</option>
            {allStudents.map(student=><option value={[student.first_name,student.last_name,student.id,]} key={student.id}>{student.first_name+" "+student.last_name}</option>)}            
            </select>
            <br />
            <br />
            <div>
            <input type="submit" />
            </div>
            <p>{isCreated?"Payment Captured successfully.Check the table top.":null}</p>
        </form>
   )
}

export default CreatePaymentForm