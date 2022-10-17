import React, { useEffect, useState } from "react";
import { Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import PageNotFound from "../pages/PageNotFound";
import Student from "../pages/member/Member";
import Applications from "../pages/member/Applications";
import Login from "../pages/member/Login";
import AllLoans from "../pages/member/AllLoans";
import ApplicationPage from "../pages/member/ApplicationsPage";
import Signup from "../pages/member/Signup";

function App(){
 const initialUser = JSON.parse(localStorage.getItem("loggedInUser")) //Gets the user and converts the data from a Json string to an Js object.
 const [loans,setLoans] = useState([])
 const [loggedInUser,setloggedInUser] = useState(initialUser)
 const [showNavbar, setShowNavbar] = useState(false)

 useEffect(()=>{   
  fetch("/loans")
   .then(response=>response.json())
   .then(data=>{
     setLoans(data)
   })
   .catch(err=>console.log(err))
  

   setShowNavbar(true)

   fetch("/me")
   .then(response=>{
    if(response.ok){
      response.json().then(user=>setloggedInUser(user))
    }
    // else{
    //   response.json().then(error=>
    //     console.log(error.errors))
    //     }
    })
   .catch(error=>console.log(error))
},[])

function onCreate(newApplication){
 const newLoans = [...loggedInUser.loan_applications,newApplication]
 setloggedInUser({...loggedInUser,loan_applications:newLoans})
}
return (
  <div>
    {showNavbar?<Navbar loggedInUser={loggedInUser} setLoggedInUser={setloggedInUser} setShowNavbar={setShowNavbar} />:null}
    <Routes>
      <Route path="/" element={<Login setShowNavbar={setShowNavbar} setLoggedInUser={setloggedInUser}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/loans" element={<Student loggedInUser={loggedInUser}/>}>
         <Route path="all" element={<AllLoans loans={loans}/>}/>
         <Route path="applications" element={<Applications loggedInUser={loggedInUser} loans={loans} setloggedInUser={setloggedInUser}/>}/>
         <Route path="apply" element={<ApplicationPage loans={loans} loggedInUser={loggedInUser} onCreate={onCreate}/>} />
      </Route>
     <Route path="*" element={<PageNotFound />}/>
    </Routes>
    {/* <Footer/> */}
  </div>
)
} 

export default App