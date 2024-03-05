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



function App() {
  const [data,setData]= useState()
  const [username, setUsername] = useState();
  useEffect(()=>{
    axios.get('/api/data')
    .then((response) => {
      setData(response.data)
    }).catch((error) => {
      console.log(error);
    })
  })

  



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
        
      </Routes>
      </BrowserRouter>
      <h1>{data}</h1>
    </>

  );
}

export default App;
