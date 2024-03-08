import Header from "./Header"
import MyList from "./Mylists"
import Getemployee from '../utils/Getemployee'
import { useEffect, useState } from "react";









const Youre = () => {
    const [employeeData, setEmployeeData] = useState([])
    const [employeeName, setEmployeeName] = useState([])
    const [employeeSalary, setEmployeeSalary] = useState([])


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
      
  return (
    <>
    <Header/>
    <MyList items={employeeData} name ={employeeName} detail={employeeSalary} />

    </>
  )
}

export default Youre