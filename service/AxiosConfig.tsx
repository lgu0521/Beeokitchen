import axios from 'axios';

const clientAPI = axios.create({
    baseURL: "http://api.stage.groun-di.com",
    withCredentials: true,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  });

// const clientAPI = axios.create({
//   baseURL: "",
//   withCredentials: true
// });

export default clientAPI;