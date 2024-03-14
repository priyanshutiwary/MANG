import React, { useState, useEffect } from 'react';
import Getuser from '../utils/Getuser';
import Getbusiness from '../utils/Getbusiness';
import axios from 'axios';
import Header from './Header';

const Addw = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: '',
    salaryType: 'Monthly', // Set default salary type
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [ownerUuid, setOwnerUuid] = useState()
  const [businessUuid, setBusinessUuid] = useState()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };


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
     setBusinessUuid(businessData.uuid);
     
     
     
   }catch(error){
     console.log("error fetching data:", error);
     
     
   }
  }
  fetchUser();

}, []);





  const handleSubmit = async(event) => {
    event.preventDefault(salaryType);
    console.log(formData)
    try{
      console.log("entered try");
      const response = await axios.post('/api/adde',{
        employeeName:formData.name,
        employeeAge:formData.age,
        employeeSalary: formData.salary,
        employeeSalaryType: formData.salaryType,
        businessUuid: businessUuid,
        employerUuid: ownerUuid,
      })
      console.log("after response");
      
      if (response.status === 200){
        alert('employee added')
        
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
if(isLoggedIn){
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 p-4">
      
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold text-center mb-4">Add Worker</h2>
          <div className="flex flex-col">
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Name (Required)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="age" className="text-gray-700 font-medium mb-2">
              Age (Required)
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="salary" className="text-gray-700 font-medium mb-2">
              Salary (Required)
            </label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="salaryType" className="text-gray-700 font-medium mb-2">
              Salary Type
            </label>
            <select
              id="salaryType"
              name="salaryType"
              value={formData.salaryType}
              onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            >
              <option value="Monthly">Monthly</option>
              <option value="Hourly">Hourly</option>
              {/* You can add additional options if needed */}
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      
      
    </div>
    </>
  );}
  else{
    return(
      <>
      <h1 className="mb-8">You are not logged in, please login</h1>
      <button
        type="button"
        onClick={()=> navigate('/login')}
        className="cursor-pointer text-red-900 text-center w-28 h-8 bg-gray-400 rounded-lg"
      >
        Log in here
      </button>
    
      </>
    
      )
  }
};

export default Addw;
