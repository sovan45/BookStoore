
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';

function Signup() {
	const navigate = useNavigate();
	const [authUser, setAuthUser] = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		reset
	} = useForm();

	const onSubmit = async (data) => {
		console.log("SignUP data from Signup component", data);
		const UserInfo = {
			fullname: data.fullname,
			email: data.email,
			password: data.password
		};

		await axios.post(`${import.meta.env.VITE_API_URL}/user/signup`, UserInfo)
			.then(res => {
				console.log("User data from signup cmp if pass", res.data);
				if (res.data) {
					toast.success('Signup Successfully!!', { duration: 3000 });
					localStorage.setItem("LocalStoragevalue", JSON.stringify(res.data.newuserdata));
					setAuthUser(res.data.newuserdata);
					// Navigate to home page after signup
					navigate('/');
				}
			})
			.catch(err => {
				if (err.response) {
					toast.error("Error:" + err.response.data.message, { duration: 3000 });
				}
			});
		reset();
	};

	return (
		<div className='flex h-screen items-center justify-center'>
			<div className="w-[500px]">
				{/* Instead of <dialog>, we use a normal <div> */}
				<div className="modal-box">
					<form onSubmit={handleSubmit(onSubmit)}>
						<Link
							to="/"
							className='btn btn-sm btn-circle btn-ghost absolute right-3 top-2'
						>
							✕
						</Link>

						<h3 className="font-bold text-lg">SignUp</h3>

						{/* Name Field */}
						<div className='mt-4'>
							<span>Name</span>
							<br />
							<input
								type="text"
								className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1"
								placeholder="Enter Your Full Name"
								{...register("fullname", { required: true })}
								onBlur={() => trigger("fullname")}
							/>
						</div>
						<br />
						{errors.fullname && <span className='text-sm text-red-600'>Name is Required</span>}

						{/* Email Field */}
						<div className='mt-4'>
							<span>Email</span>
							<br />
							<input
								type="email"
								className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1"
								placeholder="Enter Your Email"
								{...register("email", {
									required: true,
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Enter a valid email (e.g., user@gmail.com)"
									}
								})}
								onBlur={() => trigger("email")}
							/>
						</div>
						<br />
						{errors.email && <span className='text-sm text-red-600'>{errors.email.message}</span>}

						{/* Password Field */}
						<div className='mt-4'>
							<span>Password</span>
							<br />
							<input
								type="password"
								className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1"
								placeholder="Enter Your Password"
								{...register("password", { required: true })}
								onBlur={() => trigger("password")}
							/>
						</div>
						<br />
						{errors.password && <span className='text-sm text-red-600'>Password is required</span>}

						{/* Button Section */}
						<div className='flex justify-around mt-4'>
							<button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-950 duration-200">
								Signup
							</button>
							<p className='text-xl'>
								Have an account?
								<button
									className="underline text-blue-500 cursor-pointer ml-2"
									// If you want to open the Login modal, you can control that separately
									// onClick={() => navigate('/loginpath')}

									// Update from Previous code
									onClick={() => document.getElementById('my_modal_3').showModal()}
								>
									 Login
								</button>
							</p>
						</div>
					</form>
					<Login />
					
				</div>
			</div>
		</div>
	);
}

export default Signup;




// export default Signup
// Before modify  this Signup Component
// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'
// import { useNavigate } from 'react-router-dom';
// import { useForm } from "react-hook-form";
// function Signup() {
// 	const navigate = useNavigate();
// 	const {
// 		register,
// 		handleSubmit,
// 		watch,
// 		formState: { errors },
// 		trigger,
// 		reset
// 	} = useForm();
// 	const onSubmit = (data) => {
// 		console.log(data);
// 		reset();
// 	}
// 	return (
// 		<div className='flex h-screen items-center justify-center'>
// 			<div className="w-[500px]   ">
// 				<div className="modal-box">
// 					<form method="dialog" onSubmit={handleSubmit(onSubmit)}>
// 						{/* if there is a button in form, it will close the modal */}
// 						<Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-3 top-2'>✕
// 						</Link>

// 						<h3 className="font-bold text-lg">SignUp</h3>
// 						<div className='mt-4 '>
// 							<span>Name</span>
// 							<br />
// 							<input type="text" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1" placeholder="Enter Your Full Name"
// 								{...register("text", {
// 									required: true
// 								})}
// 								onBlur={() => trigger("text")} // ✅ Error appears only after clicking Login
// 							/>
// 						</div>
// 						<br />
// 						{errors.email && <span className='text-sm text-red-600'>Name is Required</span>}

// 						{/* Email */}
// 						<div className='mt-4 '>
// 							<span>Email</span>
// 							<br />
// 							<input type="email" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1" placeholder="Enter Your Email"
// 								{...register("email", {
// 									required: true,
// 									pattern: {
// 										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// 										message: "Enter a valid email (e.g., user@gmail.com)"
// 									}
// 								})}
// 								onBlur={() => trigger("email")} // ✅ Error appears only after clicking Login
// 							/>

// 						</div>
// 						<br />
// 						{errors.email && <span className='text-sm text-red-600'>{errors.email.message}</span>}

// 						{/* Pasword */}
// 						<div className='mt-4 '>
// 							<span>Password</span>
// 							<br />
// 							<input type="text" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1 " placeholder="Enter Your Password"
// 								{...register("password", { required: true })}
// 								onBlur={() => trigger("password")} // ✅ Error appears only after clicking Login
// 							/>
// 						</div>

// 						<br />
// 						{errors.email && <span className='text-sm text-red-600 '>Give a Pasword</span>}
// 						{/* Button */}
// 						<div className='flex  justify-around mt-4'>
// 							<button className="bg-pink-500 text-white rounded-md  px-3 py-1 hover:bg-pink-950 duration-200" >Signup</button>

// 							<p className='text-xl'>
// 								Have an account?

// 								<button
// 									className="underline text-blue-500 cursor-pointer ml-2"
// 									onClick={() => document.getElementById('my_modal_3').showModal()}
// 								>
// 									Login
// 								</button>
// 							</p>


// 						</div>
// 					</form>
// 					<Login />
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Signup

