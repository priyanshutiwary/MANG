import React from 'react';
import { useState, useEffect } from 'react';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Addb from './components/Addb';
import Addw from './components/Addw';

import Yourb from './components/Yourb';
import Youre from './components/Youre';
import Getuser from './utils/Getuser';
import Forgotpass from './components/Forgotpass'
import Otpentry from './components/Otpentry'
import NewPassEntry from './components/NewPassEntry';




function App() {



  



  return (
    
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/addb" element={<Addb />} />
        <Route path="/adde" element={<Addw />} />
        <Route path="/yourb" element={<Yourb />} />
        <Route path="/youre" element={<Youre />} />
        <Route path="/forgotpass" element={<Forgotpass/>}/>
        <Route path="/otpverification" element={<Otpentry />}/>
        <Route path="/setnewpass" element={<NewPassEntry />}/>
        
      </Routes>
      </BrowserRouter>
      {/* {console.log({isLoggedIn})}; */}
    </>

  );
}

export default App;
