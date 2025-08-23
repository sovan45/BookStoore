import React, { useEffect, useState } from 'react'
// import list from "../list.json"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Card from './Card'

import axios from 'axios';
function FreeBook() {
	// before use  API call
	// const filterData = list.filter((data) => data.category==="Free")
	// console.log("Filtered Data:", filterData);

	// for  work API  call we  add  it .
	const [book, setBook] = useState([]);
	useEffect(() => {
		const getBook = async () => {
			try {
				
				const res = await axios.get("https://bookstoore-2.onrender.com/book");
				console.log("Fetched Data[before Sortlist]:", res.data);  // ✅ Debug: Log full data
				const filteredBooks = res.data.filter((data) => data.category.trim().toLowerCase() === "free");
				console.log("Filtered Data:", filteredBooks); // ✅ Debug: Log filtered data
				setBook(filteredBooks);
			}
			catch (error) {
				console.log(error)
			}
		}
		getBook();
	}, [])

	var settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
  return (
	
	<>
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
			<h1 className='font-semibold text-xl pb-2'>Free Offered Books</h1>
			<p>Lorem Ipsum is simply dummy text of the 	printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
			</p>
		</div>
	
		<div>			
			  <Slider {...settings}>
				{/* here before use list */}
				{book.map((item) => (	
					<Card key={item.id} item={item} />
				))}
			  </Slider>		
		</div>
	</>
  )
}
export default FreeBook
     