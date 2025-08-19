// Before  update from ChatGPT [  for remove signup page and redirect to Home page after signup]
// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'
// import { useNavigate } from 'react-router-dom';
// import { set, useForm } from "react-hook-form";
// import axios from 'axios';
// import toast from 'react-hot-toast';

// import { useAuth } from '../context/AuthProvider';
// function Signup() {
// 	const navigate = useNavigate();

// 	// ⬇️ Get auth state and updater from context
// 	const [authUser, setAuthUser] = useAuth();

// 	const {
// 			register,
// 			handleSubmit,
// 			watch,
// 			formState: { errors },
// 			trigger,
// 			reset
// 		} = useForm();
// 		const onSubmit = async(data) =>{
// 			console.log("SignUP data from Signup component",data)
// 			const UserInfo={
// 				fullname:data.fullname,
// 				email:data.email,
// 				password:data.password
// 			}
// 			await axios.post("http://localhost:4001/user/signup",UserInfo).then(res=>{
// 				console.log("User data from signup cmp if pass",res.data);
// 				// if(res.data){
// 				// 	// alert("sigup Successfully");
// 				// 	toast.success('sigup Successfully!');
// 				// }
// 				// localStorage.setItem("LocalStoragevalue", JSON.stringify(res.data.newuserdata));

// 				// According To ChatGpt :-
// 				if (res.data) {
// 					// ⬇️ Show success toast with 3000ms duration
// 					toast.success('Signup Successfully!!', { duration: 3000 });
// 					// ⬇️ Update localStorage with the new user data (assumed returned as "newuserdata")
// 					localStorage.setItem("LocalStoragevalue", JSON.stringify(res.data.newuserdata));
// 					// ⬇️ Update auth state so that the Logout button (or other auth-based UI) appears
// 					setAuthUser(res.data.newuserdata);
// 					// ⬇️ (Optional) Navigate to a protected page or update UI as needed
// 					// navigate('/protected-route'); // Uncomment if you want to redirect after signup
// 					// We are not reloading the page so that the toast remains visible for 3 seconds

// 					// Close the login modal immediately
// 					document.getElementById('my_modal_3').close();
					
// 				}

// 			}).catch(err=>{
// 				if(err.response){
// 					// console.log("From Signup component",err)
// 					// alert("Error:"+err.response.data.message);
// 					toast.error("Error:" + err.response.data.message);
				
// 				}
// 			})
// 			reset();
// 		};
// 	return (
// 		<div className='flex h-screen items-center justify-center'>
// 			<div className="w-[500px] ">
// 				<div className="modal-box">
// 					<form method="dialog" onSubmit={handleSubmit(onSubmit)}>
// 						{/* if there is a button in form, it will close the modal */}
// 						<Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-3 top-2'>✕
// 						</Link>

// 						{/* Name :- */}
// 						<h3 className="font-bold text-lg">SignUp</h3>
// 						<div className='mt-4 '>
// 							<span>Name</span>
// 							<br />
// 							<input type="text" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1" placeholder="Enter Your Full Name" 
// 								{...register("fullname", {
// 									required: true
// 								})}
// 								onBlur={() => trigger("text")} // ✅ Error appears only after clicking Login
// 							/>
// 						</div>
// 						<br />
// 						{errors.fullname && <span className='text-sm text-red-600'>Name is Required</span>}

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
// // acoording  To  ChatGpt  

// export default Signup


// Before  update from ChatGPT
import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useNavigate } from 'react-router-dom';
import { set, useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

import { useAuth } from '../context/AuthProvider';
function Signup() {
 const navigate = useNavigate();

 // ⬇️ Get auth state and updater from context
 const [authUser, setAuthUser] = useAuth();

 const {
         register,
         handleSubmit,
         watch,
         formState: { errors },
         trigger,
         reset
     } = useForm();
     const onSubmit = async(data) =>{
         console.log("SignUP data from Signup component",data)
         const UserInfo={
             fullname:data.fullname,
             email:data.email,
             password:data.password
         }
         await axios.post("http://localhost:4001/user/signup",UserInfo).then(res=>{
             console.log("User data from signup cmp if pass",res.data);
             // if(res.data){
             //  // alert("sigup Successfully");
             //  toast.success('sigup Successfully!');
             // }
             // localStorage.setItem("LocalStoragevalue", JSON.stringify(res.data.newuserdata));

             // According To ChatGpt :-
             if (res.data) {
                 // ⬇️ Show success toast with 3000ms duration
                 toast.success('Signup Successfully!!', { duration: 3000 });
                 // ⬇️ Update localStorage with the new user data (assumed returned as "newuserdata")
                 localStorage.setItem("LocalStoragevalue", JSON.stringify(res.data.newuserdata));
                 // ⬇️ Update auth state so that the Logout button (or other auth-based UI) appears
                 setAuthUser(res.data.newuserdata);
                 // ⬇️ (Optional) Navigate to a protected page or update UI as needed
                 // navigate('/protected-route'); // Uncomment if you want to redirect after signup
                 // We are not reloading the page so that the toast remains visible for 3 seconds

                 // Close the login modal immediately
                 document.getElementById('my_modal_3').close();
                    
             }

         }).catch(err=>{
             if(err.response){
                 // console.log("From Signup component",err)
                 // alert("Error:"+err.response.data.message);
                 toast.error("Error:" + err.response.data.message);
                
             }
         })
         reset();
     };
 return (
     <div className='flex h-screen items-center justify-center'>
         <div className="w-[500px] ">
             <div className="modal-box">
                 <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                     {/* if there is a button in form, it will close the modal */}
                     <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-3 top-2'>✕
                     </Link>

                     {/* Name :- */}
                     <h3 className="font-bold text-lg">SignUp</h3>
                     <div className='mt-4 '>
                         <span>Name</span>
                         <br />
                         <input type="text" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1" placeholder="Enter Your Full Name" 
                             {...register("fullname", {
                                 required: true
                             })}
                             onBlur={() => trigger("text")} // ✅ Error appears only after clicking Login
                         />
                     </div>
                     <br />
                     {errors.fullname && <span className='text-sm text-red-600'>Name is Required</span>}

                     {/* Email */}
                     <div className='mt-4 '>
                         <span>Email</span>
                         <br />
                         <input type="email" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1" placeholder="Enter Your Email" 
                             {...register("email", {
                                 required: true,
                                 pattern: {
                                     value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                     message: "Enter a valid email (e.g., user@gmail.com)"
                                 }
                             })}
                             onBlur={() => trigger("email")} // ✅ Error appears only after clicking Login
                         />
                            
                     </div>
                     <br />
                     {errors.email && <span className='text-sm text-red-600'>{errors.email.message}</span>}
                        
                     {/* Pasword */}
                     <div className='mt-4 '>
                         <span>Password</span>
                         <br />
                         <input type="text" className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1 " placeholder="Enter Your Password"
                             {...register("password", { required: true })}
                             onBlur={() => trigger("password")} // ✅ Error appears only after clicking Login
                         />
                     </div>

                     <br />
                     {errors.email && <span className='text-sm text-red-600 '>Give a Pasword</span>}

                     {/* Button */}
                     <div className='flex  justify-around mt-4'>
                         <button className="bg-pink-500 text-white rounded-md  px-3 py-1 hover:bg-pink-950 duration-200" >Signup</button>

                         <p className='text-xl'>
                             Have an account?

                             <button
                                 className="underline text-blue-500 cursor-pointer ml-2"
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
 )
}
