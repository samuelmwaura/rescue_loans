import React from "react";
import ApplicationForm from "../../components/member/ApplicationForm";

function ApplicationPage({loggedInUser,onCreate, loans}){
return (
    <div className="studentDashboard">
    <h1>Apply for a loan</h1>
    <div id="editforms">
    <ApplicationForm onCreate={onCreate} loggedInUser={loggedInUser} loans={loans}/>
    </div>
 </div>)
}
export default ApplicationPage