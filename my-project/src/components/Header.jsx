import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Getuser } from '../utils/Getuser';
import axios from 'axios';

// const navigate = useNavigate();

const Header = () => {
  const [username, setUsername] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Getuser();
        setUsername(userData.username);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchUser();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = async (option) => {
    if (option === 'Logout') {
      try {
        await axios.post('/api/logout'); // Call the logout function
        setUsername(''); // Clear username
        setIsDropdownOpen(false);
        // Perform redirection or any necessary actions
        navigate('/login')
        console.log('Redirect to login page or desired location');
      } catch (error) {
        console.error('Logout error:', error);
      }
    } else {
      console.log(`${option} option clicked`);
      setIsDropdownOpen(false);
      // Handle other options here
    }
  };


  return (
    <div>
      <header className="bg-gray-900 text-white py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold pl-4">Mng</h1>
        <div className="flex items-center pr-4 relative">
          <span className="text-gray-300 mr-4">Welcome, {username}</span>
          <div
            className="cursor-pointer rounded-full bg-gray-600 p-2 hover:bg-gray-500 transition-colors"
            onClick={toggleDropdown}
          >
            <img
              className="w-10 h-10 rounded-full object-cover bg-gray-500"
              src="https://via.placeholder.com/150"
              alt="User Avatar"
            />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <div
                className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick('Profile')}
              >
                Profile
              </div>
              <div
                className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick('Settings')}
              >
                Settings
              </div>
              <div
                className="py-2 px-4 text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOptionClick('Logout')}
              >
                Logout
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;