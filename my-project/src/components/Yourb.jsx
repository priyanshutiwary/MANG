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
     console.log(myBusiness);





  return (
    <>
    <Header/>
    <MyList items={myBusiness} name={businessName} detail={bussinessDetail}/>


    </>
  )
}

export default Yourb