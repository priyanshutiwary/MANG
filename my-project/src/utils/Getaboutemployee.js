
import axios from 'axios';

export const Getaboutemployee = async () => {
  try {
    const res = await axios.get('/api/aboutBusiness', {
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


export default Getaboutemployee;