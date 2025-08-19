import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Contact() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		trigger,
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
		reset();
	};

	return (
		<div className='flex h-screen items-center justify-center'>
			<div className="w-[500px]">
				<div className="modal-box">
					{/* Close Button */}
					<Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-3 top-2'>✕</Link>

					<h3 className="font-bold text-lg">Contact Us</h3>

					<form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
						{/* Name */}
						<div>
							<span>Name</span>
							<br />
							<input
								type="text"
								className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1"
								placeholder="Enter Your Name"
								{...register("text", {
									required: true
								})}
								onBlur={() => trigger("text")} // ✅ Error appears only after clicking Login
							
							/>
						</div>
						<br />
						{errors.text && <span className='text-sm text-red-600'>Name is Required</span>}

						{/* Email */}
						<div>
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
								onBlur={() => trigger("email")} // ✅ Error appears only after clicking Login
							/>
						</div>
						<br />
						{errors.email && <span className='text-sm text-red-600'>{errors.email.message}</span>}

						{/* Message */}
						<div>
							<span>Message</span>
							<br />
							<textarea
								className="w-80 px-4 py-1 border rounded-md input-bordered mb-3 mt-1 h-24"
								placeholder="Enter Your Message"
								{...register("message", { required: true })}
							></textarea>
						</div>
						<br />
						{errors.message && <span className='text-sm text-red-600'>Drop Your Message</span>}

						{/* Submit Button */}
						<div className='flex justify-center mt-4'>
							<button type="submit" className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-950 duration-200">
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
