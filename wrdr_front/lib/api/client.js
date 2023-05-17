import axios from 'axios';

const API = axios.create({
  baseURL: "config",
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
