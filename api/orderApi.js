import axios from 'axios';

const API_URL = 'http://10.0.0.128:5132/api/order';

export const placeOrder = async (items) => {
  //console.log(API_URL)
  return axios.post(`${API_URL}/place-order`, { items });
};

export const getGuestOrders = async () => {
  return axios.get(`${API_URL}/guest-orders`);
};
