import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import PageNotFound from "../pages/PageNotFound";
import Student from "../pages/member/Member";
import Applications from "../pages/member/Applications";
import Login from "./Login";
import AllLoans from "../pages/member/AllLoans";
import ApplicationPage from "../pages/member/ApplicationsPage";

function App(){

 const [loans,setLoans] = useState([])
 const [loggedInUser,setloggedInUser] = useState(null)
 const [isMember, setIsMember] = useState(true)


 useEffect(()=>{   
  fetch("/loans")
   .then(response=>response.json())
   .then(data=>{
     setLoans(data)
   })
   .catch(err=>console.log(err))

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
  <BrowserRouter>
    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setloggedInUser}/>
    <Routes>
      <Route path="/" element={<Login setLoggedInUser={setloggedInUser}/>}/>
      <Route path="/loans" element={<Student loggedInUser={loggedInUser}/>}>
         <Route path="all" element={<AllLoans loans={loans}/>}/>
         <Route path="applications" element={<Applications loggedInUser={loggedInUser} loans={loans} setloggedInUser={setloggedInUser}/>}/>
         <Route path="apply" element={<ApplicationPage loans={loans} loggedInUser={loggedInUser} onCreate={onCreate}/>} />
      </Route>
     <Route path="*" element={<PageNotFound />}/>
    </Routes>
    {/* <Footer/> */}
  </BrowserRouter>
)
} 

export default App