import axios from 'axios';

const API_BASE = 'http://localhost:8080';

export const postProductAPI = (product) =>
  axios.post(`${API_BASE}/publisher/post-product`, product);

export const getNotificationsAPI = () =>
  axios.get(`${API_BASE}/subscribers`);