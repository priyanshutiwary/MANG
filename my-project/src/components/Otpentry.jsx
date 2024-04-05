import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OtpEntry = () => {
  const navigate = useNavigate();
  // const { otp } = useOtp();
  const [otp, setOtp] = useState('');
  const inputRefs = useRef([]); // Array to store input field refs

  const handleChange = (e) => {
    const newOtp = e.target.value.slice(0, 1); // Limit input to 1 digit
    setOtp(otp.slice(0, e.target.id.slice(-1) - 1) + newOtp); // Update OTP state

    const digit = parseInt(e.target.id.slice(-1), 10);
    if (digit < 6 && newOtp !== '') {
      const nextInput = inputRefs.current[digit]; // Access next input ref
      if (nextInput) {
        nextInput.focus();
      }
    } else if (e.key === 'Backspace' && digit > 1) {
      const prevInput = inputRefs.current[digit - 2]; // Access previous input ref
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/verify_otp", {
        otp,
      });

      // Check response data to determine success or failure
      if (response.status === 200) {
        // Redirect to the desired page on success
        navigate('/setnewpass');
      } else {
        setError("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("An error occurred while verifying OTP.");
    }
  };



  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-8">Enter OTP</h2>
      <div className="shadow-md rounded-lg overflow-hidden w-full sm:w-auto max-w-md px-8 py-10 bg-white relative">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <p className="text-gray-500 mb-4">
            A 6-digit OTP has been sent to your registered phone number.
          </p>
          <div className="flex flex-row space-x-2">
            {[1, 2, 3, 4, 5, 6].map((digit) => (
              <input
                 key={digit}
                type="text"
                id={`otp-input-${digit}`}
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full max-w-[50px]"
                maxLength={1}
                value={otp.charAt(digit - 1) || ''}
                onChange={handleChange}
                ref={(el) => (inputRefs.current[digit - 1] = el)} // Store ref
              />
            ))}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:bg-opacity-75"
            disabled={otp.length !== 6} // Disable button if OTP length is not 6
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpEntry;
