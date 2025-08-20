import React from "react"

function Card({ item }) {
	// console.log("Item received by Card:", item);
	if (!item) {
		return 
		// <h1>Loading...</h1>
	}

	return (
		<div className="mt-4 my-3 p-3 truncate hover:scale-105 duration-200">
			<div className="card bg-base-100 w-92 shadow-xl  dark:bg-slate-900 dark:text-white dark:border">
				<figure>
					<img src={item.image} alt={item.name} /> 
				</figure>
				
				<div className="card-body">
					<h2 className="card-title">
						{item.name}
						<div className="badge badge-secondary">FREE</div>
					</h2>
					<p className=" text-sm overflow-hidden text-ellipsis whitespace-nowrap">{item.title}</p>
					<div className="card-actions justify-between">
						<div className="badge badge-outline ">${item.price}</div>
						<div className="cursor-pointer px-2 py-1 rounded-full  hover:bg-pink-600 hover:text-white border-[2px] ">Buy Now</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Card