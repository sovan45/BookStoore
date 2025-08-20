import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';
function Logout() {
	const[authUser, setAuthUser]=useAuth();
	const handleLogout=()=>{
		
		// try{
		// 	setAuthUser({
		// 		...authUser,
		// 		LocalStoragevalue:null,
		// 	});
		// 	localStorage.removeItem("LocalStoragevalue");
		// 	toast.success("Logout Successfully");			
		// 	window.location.reload();
			
		// }catch(err){
		// 	toast.error("Error:" + err.message);
		// }

		// According  to  ChatGpt [  it  works  ]
		try {
			// Clear the authentication state
			setAuthUser(undefined); // or null, whichever you prefer
			// Remove the stored user data from localStorage
			localStorage.removeItem("LocalStoragevalue");
			// Show a success toast for 3000ms
			toast.success("Logout Successfully", { duration: 3000 });
			// Do not reload the page so the UI can update immediately
		} catch (err) {
			toast.error("Error: " + err.message, { duration: 3000 });
		}
	};

  return (
	<div>
	  <button className='px-3 py-1 rounded-md bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>
		Logout
	  </button>
	</div>
  )
}
export default Logout
