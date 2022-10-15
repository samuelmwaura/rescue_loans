import React,{useEffect, useState} from 'react'


function ApplicationForm({loggedInUser,loans,onCreate}) {
   const [newDetails,setNewDetails] = useState({category:"",user_id:loggedInUser.id,loan_id:0})
   const [errors,setErrors] = useState([])
   const [success, setSuccess] = useState('')

useEffect(()=>{
   setTimeout(()=>{
     setSuccess("")
   },10000)
})

function handleOnchange(event){
    setNewDetails({...newDetails,[event.target.name]:event.target.value})
}

  function handleOnsubmit(event){
    event.preventDefault()
    console.log(newDetails)
    fetch("/loan_applications",{
        method:"POST",
        headers:{
           "Content-Type":"Application/json",
           "Accept":"Application/json"
        },
        body:JSON.stringify(newDetails)
    })
    .then(response =>{ 
      if(response.ok){
         response.json().then(newApplication =>{
            onCreate(newApplication)
            setSuccess("New Loan aplication created successfully.")
         })
      }else{
         response.json().then(error=>{
            console.log(error)
            setErrors(error.errors[0])})
      }
 }).catch(error=>console.log(error))
 }

  return (
    <form className="registerForm" onSubmit={handleOnsubmit}>
            <h3 className="title">Apply for a Loan</h3>
            <label>Loan Name</label><select name="loan_id" onChange={handleOnchange} required> 
            <option>Select Available Loan</option>
            {loans.map(loan=><option value={loan.id} key={loan.id}>{loan.name}</option>)}            
            </select>
            <br />
            <br />
            <label>Loan Name</label><select name="category" onChange={handleOnchange} required>
            <option>Select Loan category</option> 
            <option value="urgent">Urgent</option>
            <option value="average">Average</option>
            <option value="low">Low</option>
            </select>
            <br />
            <br />
            <div>
            <input type="submit" />
            </div>
            <p style={{color:"red"}}>{errors?errors:null}</p>
            <p>{success?success:null}</p>

            
            
        </form>
  )
}

export default ApplicationForm