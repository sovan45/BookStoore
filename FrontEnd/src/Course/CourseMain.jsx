import React from 'react'
import Navbar from '../Component/Navbar'
import Course from '../Component/Course'
import Footer from '../Component/Footer'

function CourseMain() {
	
  return (
	<>
		{/* here i  import all need Component to make Course page*/}
		<Navbar/>
		<div className='min-h-screen'>
			{/* This is actually  a component that make main Component */}
			<Course />
		</div>
		
		<Footer/>
	</>
  )
}

export default CourseMain
