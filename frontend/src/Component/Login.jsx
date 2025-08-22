import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

import { useAuth } from '../context/AuthProvider';



function Login() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		trigger,
		reset
	} = useForm();

	const [, setAuthUser] = useAuth(); // We only need the setter here
	
	const onSubmit = async(data) =>{
		// console.log("SignUP data from Signup component", data)
		const UserInfo = {
			
			email: data.email,
			password: data.password
		}
		await axios.post(`${import.meta.env.VITE_API_URL}/user/login`, UserInfo).then(res => {
			console.log("res from signup cmp if pass", res.data);
			// if (res.data) {
			// 	// alert("Logedin Successfully");

			// 	toast.success('Logedin Successfully!');
			// 	document.getElementById('my_modal_3').close()
			// 	window.location.reload();
			// }
			
			// from chatGPT
			if (res.data) {				
	
				// Show success toast for 3 seconds
				toast.success('Logedin Successfully!', { duration: 4000 });

				// Update localStorage with the logged-in user's data
				localStorage.setItem("LocalStoragevalue", JSON.stringify(res.data.userdata));

				// Update the auth state so that the Logout button can appear
				setAuthUser(res.data.userdata);

				// Close the login modal immediately
				document.getElementById('my_modal_3').close();

				// Do not reload the page so the toast stays visible and UI updates gracefully
			}
			// localStorage.setItem("LocalStoragevalue", JSON.stringify(res.data.userdata));
		}).catch(err => {
			// alert("signUP Error:" + err);
			// console.log("res from signup if Fail", err)
			if (err.response) {
				// console.log(err)
				// alert("Error:" + err.response.data.message);

				toast.error("Error:" + err.response.data.message);
				setTimeout(() => {

				}, 3000)
			}
		})
		reset();
	}

	return (
		<div>
			<dialog id="my_modal_3" className="modal">
				<div className="modal-box">
					{/* Form moved inside the modal box */}
					<form onSubmit={handleSubmit(onSubmit)}>

						<Link
							to="/"
							className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
							onClick={() => document.getElementById('my_modal_3').close()}
						>✕</Link>

						<h3 className="font-bold text-lg">Login</h3>

						{/* Email */}
						<div className='mt-4'>
							<span>Email</span>
							<br />
							<input type="email" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1" placeholder="Enter Your Email"
								{...register("email", { required: true,
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Enter a valid email (e.g., user@gmail.com)"
									}
								 })}
								onBlur={() => trigger("email")} // ✅ Error appears only after clicking Login
							/>
							<br />
							{errors.email && <span className='text-sm text-red-600'>{errors.email.message}</span>}
						</div>

						{/* Password */}
						<div className='mt-4'>
							<span>Password</span>
							<br />
							<input type="password" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1" placeholder="Enter Your Password"
								{...register("password", { required: true })}
								onBlur={() => trigger("password")} // ✅ Error appears only after clicking Login
							/>
							<br />
							{ errors.password && <span className='text-sm text-red-600'> Password is required</span>}
						</div>

						{/* Button with type="submit" */}
						<div className='flex justify-around mt-4'>
							<button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-950 duration-200">
								Login
							</button>
							<p>
								Not Registered? 
								<Link to='/signuppath' className='underline text-blue-500 cursor-pointer'> Signup Now</Link>
							</p>
						</div>

					</form> {/* Moved closing tag here */}
				</div>
			</dialog>
		</div>
	)
}

export default Login;

