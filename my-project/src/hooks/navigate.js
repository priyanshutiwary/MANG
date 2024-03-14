import { Navigate } from "react-router-dom"
const navigate = useNavigate();
const navigateTo=()=>{
    const navigateToContacts=()=>{
        navigate('/Addb')
      }
      const navigateToAddworker=()=>{
        navigate('/addw')
      }
      const navigateToLoggin=()=>{
        navigate('/login')
      }
      const navigateToYourbusiness=()=>{
        navigate('/yourb')
      }
      const navigateToYourEmployee=()=>{
        navigate('/youre')
      }

}

export default navigateTo