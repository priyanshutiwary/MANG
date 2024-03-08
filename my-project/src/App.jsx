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
import env from 'dotenv';
import axios from 'axios';
import Yourb from './components/Yourb';
import Youre from './components/Youre';


function App() {
  const [data,setData]= useState()
  


  



  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='register' element={<Register />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/addb" element={<Addb />} />
        <Route path="/addw" element={<Addw />} />
        <Route path="/yourb" element={<Yourb />} />
        <Route path="/youre" element={<Youre />} />




        
      </Routes>
      </BrowserRouter>
      <h1>{data}</h1>
    </>

  );
}

export default App;
