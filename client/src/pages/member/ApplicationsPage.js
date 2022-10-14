import React from "react";
import ApplicationForm from "../../components/member/ApplicationForm";

function ApplicationPage({loggedInUser,setloggedInUser, loans}){
return (
    <div className="studentDashboard">
    <h1>Apply for a loan</h1>
    <div id="editforms">
    <ApplicationForm loggedInUser={loggedInUser} loans={loans} setloggedInUser={setloggedInUser}/>
    </div>
 </div>)
}
export default ApplicationPage