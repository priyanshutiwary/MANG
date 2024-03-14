import Header from "./Header"
import MyList from "./Mylists"
import Getemployee from '../utils/Getemployee'
import { useEffect, useState } from "react";
import Getuser from "../utils/Getuser";
import isLoggedIn from "../hooks/isLoggedIn";









const Youre = () => {
    const [employeeData, setEmployeeData] = useState([])
    const [employeeName, setEmployeeName] = useState([])
    const [employeeSalary, setEmployeeSalary] = useState([])


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
           const Data = await Getemployee();
           setEmployeeData(Data)

           setEmployeeName(Data.map((Data) => Data.employee_name))

           setEmployeeSalary(Data.map((Data) => Data.salary_amount))
           
           
           
           
         }catch(error){
           console.log("error fetching data:", error);
           
           
         }
        }
        fetchUser();
      
      }, []);
  if(isLoggedIn){
  return (
    <>
    <Header/>
    <MyList items={employeeData} name ={employeeName} detail={employeeSalary} />

    </>
  )
  }
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

export default Youre