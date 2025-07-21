import axios from 'axios';

// import { API_URL } from '@env';


const API_URL = 'http://10.0.0.128:5132/api/order';

export const placeOrder = async (items) => {
  //.log("log3")
  console.log(API_URL)
  return axios.post(`${API_URL}`, { items });
  
};

export const getGuestOrders = async () => {
  return axios.get(`${API_URL}/guest-orders`);
};
