import React from "react";

function Applications({loggedInUser}){

    return(
      <div className="studentDashboard">
         <h1>Active Loans</h1>
   <div id="table">
   <table className="table">
      <thead>
         <tr>
            <th>Loan Id</th>
            <th>Loan category</th>
            <th>Loan award date</th>
         </tr>
      </thead>
      <tbody>         
         {loggedInUser.loan_applications.map(application=>{
        return <tr key={application.id}>
            <td>{application.loan_id}</td>
            <td>{application.category}</td>
            <td>{new Date(application.created_at).toLocaleDateString()}</td>

         </tr>})}         
      </tbody>
   </table>   
   </div>
   </div>
   )
}

export default Applications