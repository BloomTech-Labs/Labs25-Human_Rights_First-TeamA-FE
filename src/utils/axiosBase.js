import axios from 'axios';
/**
 * @desc axios request with a base URL
 */
export const axiosBase = () => {
  return axios.create({
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    //replace this with herouku URL
    // baseURL: 'https://ctl-shop.herokuapp.com/api/'
    baseURL: 'https://labs25-hrf-teama-api.herokuapp.com/',
  });
};
