import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';

const Home = ({ username, setUsername }) => {
  const navigate = useNavigate();
  const navigateToContacts=()=>{
    navigate('/Addb')
  }
  const navigateToAddworker=()=>{
    navigate('/addw')
  }
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedToken = localStorage.getItem('authToken');

  //   if (storedToken) {
  //     // Validate token on the server-side (replace with your validation logic)
  //     fetch('/api/validate-token', {
  //       headers: {
  //         Authorization: `Bearer ${storedToken}`, // Include token in authorization header
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data.isValid) {
  //           setIsLoggedIn(true);
  //         } // Else handle invalid token scenario
  //       })
  //       .catch(error => {
  //         // Handle errors
  //         console.error('Token validation error:', error);
  //       });
  //   }
  // }, []);
  


  return (
    <div className="min-h-screen bg-gray-100">
      <Header username={username}/>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div onClick={navigateToContacts} className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className="text-white">Add Business</button>
          </div>
          <div onClick={navigateToAddworker} className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className=" w-52 text-white ">Add employee</button>
          </div>
          <div  className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className=" w-52 text-white ">Your bussiness</button>
          </div>
          <div  className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className=" w-52 text-white ">Manage employee</button>
          </div>
        </div>
      </main>
    </div>
  );
};


export default Home;
