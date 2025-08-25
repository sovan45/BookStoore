import React from 'react';
import { Link } from 'react-router-dom';

function About() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
			<div className="max-w-3xl bg-white shadow-lg rounded-lg p-8">
				{/* Title */}
				<h1 className="text-3xl font-bold text-gray-800 mb-4">About Us</h1>

				{/* Description */}
				<p className="text-gray-600 leading-relaxed mb-4">
					📖 Welcome to Bookstoore

					Discover a world of stories, knowledge, and imagination. At Bookstoore, we bring you a carefully curated collection of free and premium books to suit every reader’s taste.

					✨ Free Books – Explore a wide range of titles at no cost, open for everyone to enjoy.

					🔒 Premium Books – Unlock exclusive reads by logging in to your account. Experience deeper insights, bestselling titles, and premium content available only to our registered readers.

					Whether you’re here to enjoy timeless classics or the latest releases, Bookstoore is designed to give you a smooth and enriching reading experience.
				</p>

				<p className="text-gray-600 leading-relaxed mb-4">
					Our team consists of passionate individuals who strive to create impactful solutions. With
					expertise in various domains, we continuously work towards improving our platform to better
					serve our community.
				</p>

				{/* Mission Statement */}
				<div className="bg-blue-100 p-4 rounded-md mb-4">
					<h2 className="text-xl font-semibold text-blue-700">Our Mission</h2>
					<p className="text-gray-700 mt-2">
						To empower individuals and businesses with cutting-edge technology, providing them with
						the tools they need to succeed.
					</p>
				</div>

				{/* CTA Button */}
				<div className="mt-6 flex justify-center">
					<Link to="/contactpath" className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition duration-200">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
}

export default About;
