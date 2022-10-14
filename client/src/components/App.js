import React, { useEffect, useState } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from "./Navbar";
import PageNotFound from "../pages/PageNotFound";
import Student from "../pages/student/Student";
import StudentDashboard from "../pages/student/StudentDashboard";
import Registrations from "../pages/student/Registrations";
import Login from "./Login";
import Teacher from "../pages/teacher/Teacher";
import TeacherDashboard from "../pages/teacher/TeacherDashboard";
import Grade from "../pages/teacher/Grade";
import Payments from "../pages/student/Payment";
import Finance from "../pages/finance/Finance";

function App(){

 const initialUser = JSON.parse(localStorage.getItem("loggedInUser"))

 const [courses,setCourses] = useState([])
 const [loggedInUser,setloggedInUser]= useState(initialUser)
 const [aTeacherStudents,setaTeacherStudents] = useState([])
 const [studentPayments,setStudentPayments] = useState([])


 useEffect(()=>{
    fetch("https://transitacademyregistry.herokuapp.com/courses")
    .then(response=>response.json())
    .then(data=>{
      setCourses(data)
    })
    .catch(err=>console.log(err))
 },[])

return (
  <BrowserRouter>
    <Navbar loggedInUser={loggedInUser} setLoggedInUser={setloggedInUser}/>
    <Routes>
      <Route path="/" element={<Login setLoggedInUser={setloggedInUser}/>}/>
      <Route path="/students" element={<Student loggedInUser={loggedInUser}/>}>
         <Route path="registrations" element={<Registrations loggedInUser={loggedInUser} courses={courses} setloggedInUser={setloggedInUser}/>}/>
         <Route path="payments" element={<Payments studentPayments={studentPayments} setStudentPayments={setStudentPayments} loggedInUser={loggedInUser}/>}/>
         <Route path="dashboard" element={<StudentDashboard courses={courses} loggedInUser={loggedInUser} studentPayments={studentPayments} setStudentPayments={setStudentPayments}/>} />
      </Route>
      <Route path="/teachers" element={<Teacher loggedInUser={loggedInUser} />}>
        <Route path="dashboard" element={<TeacherDashboard loggedInUser={loggedInUser} aTeacherStudents={aTeacherStudents} setaTeacherStudents={setaTeacherStudents}/>}/>
        <Route path="grade" element={<Grade loggedInUser={loggedInUser}/>}/>   
      </Route> 
      <Route path="/finance/dashboard" element={<Finance loggedInUser={loggedInUser}/> }/>
      <Route path="*" element={<PageNotFound />}/>
    </Routes>
  </BrowserRouter>
)
} 

export default App