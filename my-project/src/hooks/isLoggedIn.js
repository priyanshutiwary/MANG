import { useEffect, useState } from "react";


const isLoggedIn=()=>{
    const[isLoggedIn,setIsLoggedIn]=useState()
    useEffect(()=>{
    const fetchUser = async()=>{
     try{
       const userData = await Getuser();
       setIsLoggedIn(true);
     }catch(e){
       console.log("error fetching data:", error);
       setIsLoggedIn(false);
     }
    }
    fetchUser();

 }, []);

}

export default isLoggedIn