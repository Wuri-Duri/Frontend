import axios from 'axios';

const API = axios.create({
  baseURL: 'http://52.79.115.87:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
