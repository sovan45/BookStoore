import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthProvider.jsx';

// Before--------
// ReactDom.createRoot(document.getElementById('root')).render(
//   <BrowserRouter>
//     <div className='dark:bg-slate-900 dark:text-white' >
//       <App />
//     </div>
    
//   </BrowserRouter>
// );

// After-------
const theme = localStorage.getItem("theme") || "light";
if (theme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

ReactDom.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <App /> */}
    <AuthProvider className='dark:bg-slate-900 dark:text-white'> 
      <div>
        <App /> 
      </div>     
    </AuthProvider>
  </BrowserRouter>
);





// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
//  For react router  we need to work out this strict mode