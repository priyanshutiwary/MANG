import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'
import axios from 'axios'
import {Getuser} from '../utils/Getuser'
import Getbusiness from '../utils/Getbusiness';


const Addb = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    businessName: '',
    businessDetails: '',
  });
  const [ownerUuid, setOwnerUuid] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); 


  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const navigateToLoggin=()=>{
    navigate('/login')
  }
  useEffect(()=>{
    const fetchUser = async()=>{
     try{
       const userData = await Getuser();
       setOwnerUuid(userData.uuid)
       setIsLoggedIn(true)
       
     }catch(error){
       console.log("error fetching data:", error);
       setIsLoggedIn(false)
       
     }
    }
    fetchUser();

 }, []);

 useEffect(()=>{
  const fetchUser = async()=>{
   try{
     const businessData = await Getbusiness();
     console.log(businessData);
     
     
     
   }catch(error){
     console.log("error fetching data:", error);
     
     
   }
  }
  fetchUser();

}, []);



  const handleSubmit = async(event) => {
    event.preventDefault();
    setIsLoading(true)
      
      try{
        console.log("entered try");
        const response = await axios.post('/api/addb',{
          businessName:formData.businessName,
          businessDetails:formData.businessDetails,
          ownerUuid: ownerUuid,
        })
        console.log("after response");
        
        if (response.status === 200){
          alert('bussiness added')
          
        }else{
          alert('error adding');
        }
        

      }catch(e){
        console.log('Adding error:' , e);
        alert('failed')
        

      }
      
      console.log('Form submitted:', formData);
      setFormData({ businessName: '', businessDetails: '' }); // Clear form after submission
     
  };
  





  if(isLoggedIn ){
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-4">
     
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-center mb-4">Add Business</h2>
          <div className="flex flex-col">
            <label htmlFor="businessName" className="text-gray-700 font-medium mb-2">
              Business Name (Required)
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="businessDetails" className="text-gray-700 font-medium mb-2">
              Business Details (Required)
            </label>
            <textarea
              id="businessDetails"
              name="businessDetails"
              value={formData.businessDetails}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
     
      
    </div>
    </>
  )
  
  }else if(!isLoggedIn){
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
}

export default Addb