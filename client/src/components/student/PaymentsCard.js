import React,{useEffect} from "react";

function PaymentsCard({loggedInUser,studentPayments,setStudentPayments}){

  useEffect(()=>{   
    
    fetch(`https://transitacademyregistry.herokuapp.com/students/payments/${loggedInUser.id}`)
    .then(response=>response.json())
    .then(data=>setStudentPayments([...data.payments]))
    .catch(error=>console.log(error))
    
   },[loggedInUser,setStudentPayments])

  const totalFees = studentPayments.reduce((total,payment)=>{
      return total + payment.amount
  },0)

    return(
        <div className="dashboardCard">
        <span className="material-icons">payment</span>
        <h2><span>{totalFees}</span>Semester Payment</h2>
        </div>
      )    
}

export default PaymentsCard