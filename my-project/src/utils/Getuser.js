
import axios from 'axios';

export const Getuser = async (setIsLoggedIn, setUsername) => {
  try {
    const res = await axios.get('http://localhost:5001/'+'api/aboutUser', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      withCredentials: true, // Include cookies for authentication
    });

    // console.log(res.data); // Access data within the 'data' property
    if (res.status == 200) {
        return res.data;
    } else {
        throw new Error('failed to fetch data')
      
      
    }
  } catch (error) {
    console.error(error);
    throw error;
    
  }
};


export default Getuser;