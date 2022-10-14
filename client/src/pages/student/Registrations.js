import React, { useState,useEffect } from "react";
import Editform from "../../components/student/EditForm";
import RegisterForm from "../../components/student/RegisterForm";

function Registrations({loggedInUser,loans,setloggedInUser}){

    return(
      <div className="studentDashboard">
         <h1>Active Loans</h1>
   <div id="table">
   <table className="table">
      <thead>
         <tr>
            <th>Loan Id</th>
            <th>Loan category</th>
         </tr>
      </thead>
      <tbody>         
         {loggedInUser.loan_applications.map(application=>{
        return <tr key={application.id}>
            <td>{application.loan_id}</td>
            <td>{application.category}</td>
         </tr>})}         
      </tbody>
   </table>   
   </div>
   <h1>Apply for a loan</h1>
   <div id="editforms">
   <RegisterForm loggedInUser={loggedInUser} loans={loans} setloggedInUser={setloggedInUser}/>
   {/* <Editform loggedInUser={loggedInUser} loans={loans} setloggedInUser={setloggedInUser}/> */}

   </div>
   </div>
   )
}

export default Registrations