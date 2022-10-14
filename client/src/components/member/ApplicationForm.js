import React,{useState} from 'react'


function ApplicationForm({loggedInUser,loans,onCreate}) {
   const [newDetails,setNewDetails] = useState({category:"",user_id:loggedInUser.id,loan_id:0})
   const [errors,setErrors] = useState([])


function handleOnchange(event){
    setNewDetails({...newDetails,[event.target.name]:event.target.value})
}

  function handleOnsubmit(event){
    event.preventDefault()
    console.log(newDetails)
    fetch("http://localhost:3000/loan_applications",{
        method:"POST",
        headers:{
           "content_Type":"Application/json",
           "Accept":"Application/json"
        },
        body:JSON.stringify(newDetails)
    })
    .then(response =>{ 
      if(response.ok){
         response.json().then(newApplication =>onCreate(newApplication))
      }else{
         response.json().then(error=>setErrors(error.errors[0]))
      }
   //    response.json()})

   //  .then(data =>{
   //     console.log(data)
   //     const newRegistration = [data,...loggedInUser.registrations]
   //     setloggedInUser({...loggedInUser,registrations:newRegistration})
   // 
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
            <p>{errors?errors[0]:null}</p>
        </form>
  )
}

export default ApplicationForm