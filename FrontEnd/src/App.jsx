import React from 'react'
import Home from './Home/Home'
import Course from './Component/Course'
import { Route,Routes } from 'react-router-dom'
import CourseMain from '../src/Course/CourseMain'
import { useState } from 'react'
import Signup from './Component/Signup'
import Login from './Component/Login'
import Contact from './Component/Contact'
import About from './Component/About'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const[authUser,setAuthUser]=useAuth();
  console.log("Localstoragevalue",authUser);

  return (
    <div className='dark:bg-slate-900 dark:text-white' key={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/courseop" element={<CourseMain />} /> */}
        <Route path="/courseop" element={authUser?<CourseMain/>:<Signup/>} />


        <Route path="/signuppath" element={<Signup/>} />
        <Route path="/loginpath" element={<Login />} />
        
        <Route path="/contactpath" element={<Contact />} />
        <Route path="/aboutpath" element={<About />} />
      </Routes>
      <Toaster/>
    </div>
  );
}
export default App