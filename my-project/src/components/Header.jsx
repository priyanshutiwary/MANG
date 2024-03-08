import React, { useState } from 'react'
import { useEffect } from 'react';
import Login from './Login';
import {Getuser} from '../utils/Getuser'

// import {username} from '../components/Login'
const Header = () => {
    const [username, setUsername]= useState();
    
    useEffect(()=>{
        const fetchUser = async()=>{
         try{
           const userData = await Getuser();
           setUsername(userData.username);
           
         }catch(error){
           console.log("error fetching data:", error);
           
         }
        }
        fetchUser();
    
     }, []);
    



  return (
    <div>
              <header className="bg-gray-800 text-white py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold pl-4">Mng</h1>
        <div className="flex items-center pr-4">
          <span className="text-gray-300 mr-4">Welcome, {username}</span>
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