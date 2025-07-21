import axios from 'axios';

import { API_URL } from '@env';



export const placeOrder = async (items) => {
  return axios.post(`${API_URL}`, { items });
};

export const getGuestOrders = async () => {
  return axios.get(`${API_URL}/guest-orders`);
};
