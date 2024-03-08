import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios'
import {Getuser} from '../utils/Getuser'

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const navigateToContacts=()=>{
    navigate('/Addb')
  }
  const navigateToAddworker=()=>{
    navigate('/addw')
  }
  const navigateToLoggin=()=>{
    navigate('/login')
  }
  const navigateToYourbusiness=()=>{
    navigate('/yourb')
  }
  const navigateToYourEmployee=()=>{
    navigate('/youre')
  }

  

  useEffect(()=>{
     const fetchUser = async()=>{
      try{
        const userData = await Getuser();
        setIsLoggedIn(true);
      }catch(e){
        console.log("error fetching data:", error);
        setIsLoggedIn(false);
      }
     }
     fetchUser();

  }, []);
  
  

  if(isLoggedIn){
  return (
    <>
    
    <div className="min-h-screen min-w-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div onClick={navigateToContacts} className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className="text-white">Add Business</button>
          </div>
          <div onClick={navigateToAddworker} className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className=" w-52 text-white ">Add employee</button>
          </div>
          <div onClick={navigateToYourbusiness}  className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className=" w-52 text-white ">Your bussiness</button>
          </div>
          <div onClick={navigateToYourEmployee}  className="bg-black h-full flex items-center justify-center p-4 rounded-md  hover:bg-gray-700 hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ease-in-out">
            <button className=" w-52 text-white ">Manage employee</button>
          </div>
        </div>
      </main>
    </div>
    </>
)}else if(!isLoggedIn){
  return(
  <>
  <h1 className="mb-8">You are not logged in, please login</h1>
  <button
    type="button"
    onClick={navigateToLoggin}
    className="cursor-pointer text-red-900 text-center w-28 h-8 bg-gray-400 rounded-lg"
  >
    Log in here
  </button>

  </>

  )
}
  
};



export default Home;
