import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom


const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [OTP, setOTP] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending reset link (replace with actual logic)
    console.log(`Sending reset link to: ${email}`);
    setEmail('');
  };

  const sendOtp = async () => {
    try {
      if (email) {
        const OTP = Math.floor(Math.random() * 1000000 + 1000);
        
        setOTP(OTP);

        const response = await axios.post("/api/send_recovery_email", {
          
          recipient_email: email,
        });

        // Check response data to determine success or failure
        if (response.data.success) {
          alert("OTP sent successfully. Please check your email.");
          navigate('/otpverification'); // Navigate to OtpEntry component on success
        } else {
          alert("Failed to send OTP. Please try again later.");
        }
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while sending OTP.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center mb-8">Forgot Password</h1>
      <div className="shadow-md rounded-lg overflow-hidden w-full sm:w-auto max-w-md px-8 py-10 bg-white relative">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300 ease-in-out hover:border-blue-500"
            />
          </div>
          <button
            type="submit"
            onClick={sendOtp}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 transition duration-300 ease-in-out hover:bg-opacity-75"
          >
            Send otp
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          A reset link will be sent to your registered email address.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
