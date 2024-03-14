import { useState, useEffect } from "react";
import MyList from "./Mylists"
import Header from "./Header"
import Getbusiness from "../utils/Getbusiness";
import Getuser from "../utils/Getuser";

 


  

const Yourb = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [ myBusiness, setMyBusiness] = useState([]);
    const [bussinessDetail, setBusinessDetail]= useState([])
    const [businessName, setBusinessName] =useState([])

    useEffect(()=>{
        const fetchUser = async()=>{
         try{
           const userData = await Getuser();
           setIsLoggedIn(true);
         }catch(e){
           console.log("error fetching data:", e);
           setIsLoggedIn(false);
         }
        }
        fetchUser();
    
     }, []);


     useEffect(()=>{
        const fetchUser = async()=>{
         try{
           const Data = await Getbusiness();
           
           setMyBusiness(Data)
           setBusinessName(Data.map((Data) => Data.business_name))
           setBusinessDetail(Data.map((Data) => Data.business_details))
           
         }catch(e){
           console.log("error fetching data:", error);
           
         }
        }
        fetchUser();
    
     }, []);
     




if(isLoggedIn){
  return (
    <>
    <Header/>
    <MyList items={myBusiness} name={businessName} detail={bussinessDetail}/>


    </>
  )}
  else{
    return(
      <>
      <h1 className="mb-8">You are not logged in, please login</h1>
      <button
        type="button"
        onClick={()=> navigate('/login')}
        className="cursor-pointer text-red-900 text-center w-28 h-8 bg-gray-400 rounded-lg"
      >
        Log in here
      </button>
    
      </>
    
      )
  }
}

export default Yourb