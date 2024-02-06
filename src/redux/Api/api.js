import axios from 'axios';

axios.defaults.baseURL = 'https://65b1164fd16d31d11bde0807.mockapi.io/api';

// Cars

export const getAllCars = async () => {
  return await axios.get('/adverts');
};
