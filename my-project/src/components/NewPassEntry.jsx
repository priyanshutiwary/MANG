import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewPassEntry = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (newPassword === confirmPassword){
    try {
      const response = await axios.post("/api/resetpass", {
        newPassword
      });
      if(response.status === 200){
        alert("password updated")

        navigate('/login')
      }

      // Check response data to determine success or failure
      
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("An error occurred while verifying OTP.");
    }
  }else{
    alert("passwords don't match")
  }
    // Handle form submission logic here
    // e.g., send OTP and new password to the server for verification
    console.log('New Password:', newPassword);
    console.log('Confirm Password:', confirmPassword);
  };



  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-full max-w-md rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Reset Password</h1>
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassEntry;