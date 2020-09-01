import axios from 'axios';
/**
 * @desc axios request with a base URL
 */
export const axiosBase = () => {
  return axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // baseURL: 'http://localhost:8000/'
    baseURL: 'https://labs25-hrf-teama-api.herokuapp.com',
  });
};
