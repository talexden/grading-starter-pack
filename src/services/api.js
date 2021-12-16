import axios from 'axios';

const REQUEST_TIMEOUT = 1000;
const BASE_URL = 'http://localhost:3001';

export const createAPI = () => {
  return axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });
};

