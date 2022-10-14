import React from "react";

function Payments({studentPayments}){
   
   
  return(
    <div className="studentDashboard">
        <h1>Semester Payments.</h1>
    <div id="summaries">
    <div className="paymentsTable">
   <table className="table" id="paymentsTable">
      <thead>
         <tr>
         <th>Payment Date</th>
         <th>Amount</th>            
         </tr>
      </thead>
      <tbody>         
         {studentPayments.map(payment=>{
        return <tr key={payment.id}>
            <td>{new Date(payment.created_at).toLocaleDateString()}</td>
            <td>{payment.amount}</td>
    
         </tr>})}         
      </tbody>
   </table>   
   </div>
    </div>
       
    </div> 
  )
}
export default Payments