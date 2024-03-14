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
import Getuser from './utils/Getuser';


function App() {
  const [data,setData]= useState()
  const [isLoggedIn, setIsLoggedIn] = useState()


//   useEffect(()=>{
//     const fetchUser = async()=>{
//      try{
//        const userData = await Getuser();
//        setIsLoggedIn(true);
//      }catch(e){
//        console.log("error fetching data:", error);
//        setIsLoggedIn(false);
//      }
//     }
//     fetchUser();

//  }, []);
  


  



  return (
    <>
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login/>}/>
        <Route path='register' element={<Register />}/>
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/addb" element={<Addb isLoggedIn={isLoggedIn}/>} />
        <Route path="/adde" element={<Addw isLoggedIn={isLoggedIn}/>} />
        <Route path="/yourb" element={<Yourb isLoggedIn={isLoggedIn}/>} />
        <Route path="/youre" element={<Youre isLoggedIn={isLoggedIn}/>} />




        
      </Routes>
      </BrowserRouter>
      {/* {console.log({isLoggedIn})}; */}
    </>

  );
}

export default App;
