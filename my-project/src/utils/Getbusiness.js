
import axios from 'axios';

export const Getbusiness = async () => {
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
      console.log(res)
        return res.data;
    } else {
        throw new Error('failed to fetch data')
      
      
    }
  } catch (error) {
    console.error(error);
    throw error;
    
  }
};


export default Getbusiness;