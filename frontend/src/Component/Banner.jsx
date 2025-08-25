import React from 'react'
import banner from '../bannerpng.png'; 
function Banner() {
  return (
	<>
		<div className='max-w-screen-2xl container mx-auto md:px-20 px-2  flex flex-col md:flex-row mt-0 md:mt-24 my-10'>
			<div className="w-full md:w-1/2 md:order-1 order-2  dark:bg-slate-900 dark:text-white">
				<div className="space-y-12">
					  <h1 className="text-4xl font-bold">
						  Hello, Welcome Here to learn Something<span className="text-pink-600"> New Everyday!!!</span>
					  </h1>
					  <p className="text-xl ">
						  📖 Welcome to Bookstoore

						  Discover a world of stories, knowledge, and imagination. At Bookstoore, we bring you a carefully curated collection of free and premium books to suit every reader’s taste.

						  ✨ Free Books – Explore a wide range of titles at no cost, open for everyone to enjoy.

						  🔒 Premium Books – Unlock exclusive reads by logging in to your account. Experience deeper insights, bestselling titles, and premium content available only to our registered readers.

						  Whether you’re here to enjoy timeless classics or the latest releases, Bookstoore is designed to give you a smooth and enriching reading experience.
					  </p>

					  
					  
				</div>
				<div className=" mt-4">
					 <label className="input input-bordered flex items-center gap-2">
						  Email
					  <input type="text" className="grow" placeholder="GiveYour@gmail.com" />
					</label>
					<button className="btn btn-secondary mt-4">Submit</button>
				</div>
			</div>

			{/* Now  here we  addd image another part[right side] of Banner */}
			  <div className="w-full md:w-1/2 order-1 md:ml-16 ">
				<img src={banner} className='w-96 h-96 ' alt="Banner Image" />
			</div>
		</div>	  
	</>
  );
}

export default Banner
