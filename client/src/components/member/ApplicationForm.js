import React,{useState} from 'react'


function RegisterForm({loggedInUser,loans,setloggedInUser}) {
   const [newDetails,setNewDetails] = useState({student_name:loggedInUser.first_name+"  "+loggedInUser.last_name,course_name:"",student_id:loggedInUser.id,course_id:""})
   const [isCreated,setIsCreated] = useState(false)


function handleOnchange(event){
    setNewDetails({...newDetails,[event.target.name]:event.target.value})
}

  function handleOnsubmit(event){
    event.preventDefault()

    fetch("https://transitacademyregistry.herokuapp.com/registrations",{
        method:"POST",
        headers:{
           "content_Type":"Application/json",
           "Accept":"Application/json"
        },
        body:JSON.stringify(newDetails)
    })
    .then(response => response.json())
    .then(data =>{
       console.log(data)
       const newRegistration = [data,...loggedInUser.registrations]
       setloggedInUser({...loggedInUser,registrations:newRegistration})
       setIsCreated(true)
    })
    .catch(error=>console.log(error))
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
            <p>{isCreated?"New Registration created!":null}</p>
        </form>
  )
}

export default RegisterForm