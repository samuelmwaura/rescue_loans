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

 const initialUser = JSON.parse(localStorage.getItem("loggedInUser"))

 const [loans,setLoans] = useState([])
 const [loggedInUser,setloggedInUser] = useState(initialUser)


 useEffect(()=>{   
  fetch("http://localhost:3000/loans")
   .then(response=>response.json())
   .then(data=>{
     setLoans(data)
   })
   .catch(err=>console.log(err))
},[])

function onCreate(newApplication){
 const newLoans = [...loggedInUser.loans,newApplication]
 setloggedInUser({...loggedInUser,loans:newLoans})
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
  </BrowserRouter>
)
} 

export default App