// import React, { useEffect } from 'react'
import list from '../list.json'
import Card from './Card'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react';
function Course() {
	// console.log("list is :", list);
	const [book,setBook]=useState([])
	useEffect(()=>{
		const getBook=async()=>{
			try{
				const res=await axios.get("http://localhost:4001/book");
				console.log(res.data);
				setBook(res.data)
			}
			catch(error){
				console.log(error)
			}
		}
		getBook();
	},[])
	return (
		<div className=' max-w-screen-2xl container mx-auto md:px-20 px-4 '>
			<div className='mt-32 items-center justify-center text-center'>
				<h1 className='text-2xl md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here! :)</span> </h1>

				<p className='mt-12'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

				<Link to={'/'} >
					<button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>Back</button>
				</Link>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-4 gap-0 mt-12'>
			{/* previously here have list.map */}
				{book.map((item) => (
					<Card key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default Course

