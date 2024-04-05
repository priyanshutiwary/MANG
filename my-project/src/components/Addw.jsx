import React, { useState, useEffect } from 'react';
import Getuser from '../utils/Getuser';
import Getbusiness from '../utils/Getbusiness';
import axios from 'axios';
import Header from './Header';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Addw = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: '',
    salaryType: 'Monthly', // Set default salary type
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Added state for loading
  const [ownerUuid, setOwnerUuid] = useState();
  const [businessUuid, setBusinessUuid] = useState('88012167-b663-4243-8dc7-ef6c36d4916f');
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [businesses, setBusinesses] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      try {
        const userData = await Getuser();
        setOwnerUuid(userData.uuid);
        setIsLoggedIn(true);
      } catch (error) {
        console.log("error fetching user data:", error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchBusiness = async () => {
      setIsLoading(true); // Set loading to true before fetching data
      try {
        const businessData = await Getbusiness();
        setBusinesses(businessData);
      } catch (error) {
        console.log("error fetching business data:", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching data
      }
    };
    fetchBusiness();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);
    try {
      const response = await axios.post('/api/adde', {
        employeeName: formData.name,
        employeeAge: formData.age,
        employeeSalary: formData.salary,
        employeeSalaryType: formData.salaryType,
        businessUuid: businessUuid,
        employerUuid: ownerUuid,
      });
      console.log("after response");

      if (response.status === 200) {
        alert('employee added');
      } else {
        alert('error adding');
      }
    } catch (e) {
      console.log('Adding error:', e);
      alert('failed');
    }
    console.log('Form submitted:', formData);
    setFormData({ businessName: '', businessDetails: '' }); // Clear form after submission
  };
if(isLoggedIn && !isLoading){
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
          <div className="flex flex-col">
              <label htmlFor="business" className="text-gray-700 font-medium mb-2">
                Business
              </label>
              <select
                id="business"
                name="business"
                value={selectedBusiness}
                onChange={(e) => setSelectedBusiness(e.target.value)}
                
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="select a business">None</option>
                {businesses.map((business) => (
                  
                  <option key={business.id} value={business.id}>
                    {business.business_name}
                    
                  </option>
                  
                )
                )}

              </select>


            </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      
      
    </div>
    </>
  );}
  else if(isLoading) {
    
    return (
      <div className="loading-wrapper flex flex-col items-center justify-center h-screen">
        
        <p>Loading...</p>
      </div>
    );
  } 

};

export default Addw;
