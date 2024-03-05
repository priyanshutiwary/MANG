import React, { useState } from 'react'
import { useEffect } from 'react';
import {username} from '../components/Login'
const Header = () => {
    ;

    // useEffect(() => {
    //   const fetchUsername = async () => {
    //     const storedToken = getSecurelyStoredToken(); // Replace with your token retrieval logic
  
    //     if (storedToken) {
    //       try {
    //         const response = await axios.get('/api/username', { // Replace with your API endpoint
    //           headers: {
    //             Authorization: `Bearer ${storedToken}`,
    //           },
    //         });
  
    //         setUsername(response.data.username); // Assuming username is in the response data
    //       } catch (error) {
    //         console.error('Error fetching username:', error);
    //         // Handle errors appropriately
    //       }
    //     }
    //   };
  
    //   fetchUsername();
    // }, []);
    
    



  return (
    <div>
              <header className="bg-gray-800 text-white py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold pl-4">Mng</h1>
        <div className="flex items-center pr-4">
          <span className="text-gray-300 mr-4">Welcome,{username}</span>
          <img
            className="w-10 h-10 rounded-full object-cover bg-gray-500"
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
        </div>
      </header>
    </div>
  )
}

export default Header