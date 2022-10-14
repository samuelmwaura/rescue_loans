import React, {useState } from "react";

function AllLoans({loans}){
const [filterer,setFilterer] = useState("")

function handleOnchange(event){
    setFilterer(event.target.value)
}

const displayedLoans = loans.filter(loan => loan.name.toLowerCase().includes(filterer.toLowerCase()))//reverse the array to start with the latest

  return(<> 
    <div className="studentPage">
      <div className="studentDashboard">
      <h1>Loan facilities Available</h1>
      <div  id="financeView">
      <div id="allpayments">
      <div className="selectCourseToGrade"><label>Search A loan:</label><input onChange={handleOnchange} value={filterer} placeholder="Enter loan name."/></div>
        <table className="table">
        <thead>
           <tr>
              <th>Loan Identifier</th>
              <th>Loan name</th>
              <th>Loan Purpose</th>
              <th>Timing in months</th>
              <th>Available from</th>
           </tr>
        </thead>
        <tbody>         
           {displayedLoans.map(loan=>{
          return <tr key={loan.id}>
              <td>{loan.id}</td>
              <td>{loan.name}</td>
              <td>{loan.purpose}</td>
              <td>{loan.timing}</td>
              <td>{new Date(loan.created_at).toLocaleDateString()}</td>

              
              </tr>})}         
        </tbody>
     </table>   
      </div>
      </div>
      
      </div>
    </div>
  </>)
}

export default AllLoans