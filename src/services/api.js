import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://jsm-c-api.herokuapp.com',
  })
}