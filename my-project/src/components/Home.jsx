import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import axios from 'axios';
import { Getuser } from '../utils/Getuser';
import Login from './Login';

const logos = {
  "Add Business": "fas fa-plus-circle",
  "Add Employee": "fas fa-user-plus",
  "Your Business": "fas fa-briefcase",
  "Manage Employee": "fas fa-users",
};

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Getuser();
        setIsLoggedIn(true);
      } catch (e) {
        console.log("error fetching data:", error);
        setIsLoggedIn(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className={isLoggedIn ? "home-wrapper" : "login-wrapper"}>
      {isLoggedIn && (
        <>
          <Header />
          <main className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Manage Your Business</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ActionCard text="Add Business" color="green" onClick={() => navigate('/addb')} />
              <ActionCard text="Add Employee" color="blue" onClick={() => navigate('/adde')} />
              <ActionCard text="Your Business" color="purple" onClick={() => navigate('/yourb')} />
              <ActionCard text="Manage Employee" color="indigo" onClick={() => navigate('/youre')} />
            </div>
          </main>
        </>
      )}
      {!isLoggedIn && (
        <div className="login-wrapper flex flex-col items-center justify-center h-screen">
          <h1 className="mb-8 text-white text-5xl font-bold">Welcome</h1>
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="btn-login px-8 py-4 rounded-full shadow-lg hover:scale-105 transition duration-300 ease-in-out"
          >
            Log in Now
          </button>
        </div>
      )}
    </div>
  );
};

const ActionCard = ({ text, color, onClick }) => {
  const icon = logos[text]; // Get the corresponding logo based on text

  return (
    <div
      className={`action-card bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out flex flex-col items-center justify-center`}
      onClick={onClick}
    >
      <i className={`${icon} text-4xl text-${color} mb-2`}></i>
      <button className="text-xl font-bold text-{color}">{text}</button>
    </div>
  );
};

export default Home;
