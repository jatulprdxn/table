import axios from 'axios';

export const getData = async () => {  // actual function which is responsible getting data from API
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const res = response.data.map(item =>({...item,isEditable:'false'}))
    if (response.status === 200) return res;
  }
  catch(error) {
    return false;
  }
}

