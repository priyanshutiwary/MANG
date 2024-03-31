import React from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Popdetails from './Popdetails'

const About = () => {
    const navigate = useNavigate()
    const login =() =>  {
        
        navigate('/login')

    }
    const register = () =>{
        navigate('/register')
        console.log("register got clicked")
    }
    
    
  return (
    <div className="container mx-auto py-12 px-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget leo nec lorem finibus tincidunt at sit amet odio. Vivamus id tortor sit amet odio pulvinar fringilla. Donec ut libero sit amet neque fermentum bibendum. Nullam id ligula orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. Praesent eget turpis vel neque laoreet tincidunt.
      </p>
      <div className="flex justify-center gap-4">
        <button onClick={login} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          Login
        </button>
        <button onClick={register} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full shadow-md">
          Register
        </button>
      </div>
    </div>
  );
};

export default About;
