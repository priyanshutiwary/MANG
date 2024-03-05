// import React, {useState}from 'react';
// // import { useHistory } from "react-router-dom";
// import { Routes, Route, useNavigate } from 'react-router-dom';
// import axios from 'axios';


// const Login = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/login', {
//         email,
//         password,
//       });
      
      

//       if (response.status===200) {
//         // const uuid = response.data.data.uuid; // Access nested data object
//         const token = 

//       // console.log(uuid);
//     // Store token securely (e.g., local storage with appropriate security measures)
//         // localStorage.setItem((JSON.stringify(user)))
//         navigate('/home');
        
//       } else if (response.status===404) {
//         alert('Invalid credentials');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       alert('Login failed');
//     }
//   };

//   return (
//     <>
//     <div className="">
    
    
//     <div className=" flex-auto min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 h-96 w-auto rounded-lg shadow-md">
//         <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email address
//             </label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-bold py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
//           >
//             Login
//           </button>
//           <div className='forgetPassword'>
//           <a href="">
//           <h3 className=' text-left text-red-600  '>forget password</h3>
//           </a>
//           </div>
          
//         </form>

//       </div> 
//     </div>
//     <div className=" h-20 w-60 will-change-auto px-4 py-2 rounded-md bg-blue-500 text-white font-medium">
//             <a className="" href="/auth/google" role="button">
//               <i className="fab fa-google"></i>
//               <h2 className=' '>Sign In with Google</h2>
//             </a>
//       </div>
//     </div>
//     </>
    
//   )
// }


// export default Login

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import cookies from "universal-cookie"
import { jwtDecode } from "jwt-decode";
import Cookies from 'cookies';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      console.log(response);

      if (response.status === 200) {
        const token = response.data.token;
        // Assuming token received in response
        const decoded = jwtDecode(token)
        setUsername=decoded.username
        setUser(decoded) 
        const jwt_token = token; 
        try{
        cookies.set('jwt_authorization', jwt_token,{
          
          expires: new Date(decoded.exp * 1000),
        });
      }catch(e){
        console.log(e);
        alert('fuck! cannot set cookie')
      }
        console.log("cannot cookie set")
        // **Securely store token (replace with your secure storage solution):**
        // - Consider using encrypted local storage or HttpOnly cookies
        // localStorage.setItem('token', JSON.stringify(token)); // Not recommended (insecure)

        navigate('/home');
      } else if (response.status === 404) {
        alert('Invalid credentials');
      } else {
        console.error('Unexpected error:', response.data);
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };
  

  return (
    <div className="">
      <div className="flex-auto min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 h-96 w-auto rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              Login
            </button>
            <div className="forgetPassword">
              <a href="">
                <h3 className="text-left text-red-600">Forget password</h3>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="h-20 w-60 will-change-auto px-4 py-2 rounded-md bg-blue-500 text-white font-medium">
        <a className="" href="/auth/google" role="button">
          <i className="fab fa-google"></i>
          <h2 className=" ">Sign In with Google</h2>
        </a>
      </div>
    </div>
  );
};

export default Login;
