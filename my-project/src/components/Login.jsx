import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [username, setUsername] = useState('hello');
  const cookies = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.token;
        const decoded = jwtDecode(token);
        setUsername(decoded.username);
        navigate('/home');
      } 
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert('Invalid credentials');
      } else {
        alert('Login failed');
      }
      console.error('Login error:', error);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleForgetpass = () => {
    navigate('/forgotpass');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 w-full max-w-md rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-500 mb-4"
          >
            Login
          </button>
          <div className="space-y-2">
            <Link
              to="/forgotpass"
              onClick={handleForgetpass}
              className="text-red-500 hover:text-red-700 transition-colors duration-300"
            >
              Forget password
            </Link>
            <br />
            <Link
              to="/register"
              onClick={handleRegister}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
            >
              Don't have an account? Sign up here
            </Link>
          </div>
        </form>
      </div>
      <div className="h-20 w-60 px-4 py-2 rounded-md bg-blue-500 text-white font-medium mt-4">
        <a className="flex items-center justify-center" href="/auth/google" role="button">
          <i className="fab fa-google mr-2"></i>
          <span>Sign In with Google</span>
        </a>
      </div>
    </div>
  );
};

export default Login;
