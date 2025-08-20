import React from 'react'
import Navbar from '../Component/Navbar'
import Banner from '../Component/Banner'
import FreeBook from '../Component/FreeBook'
import Card from '../Component/Card'
import Footer from '../Component/Footer'

function Home() {
  return (
	<>
		<Navbar/>
		<Banner/>
		<FreeBook />
		<Card />
		<Footer />     
	</>
  )
}
export default Home
