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
						  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
