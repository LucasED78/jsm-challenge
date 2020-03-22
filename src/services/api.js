import axios from 'axios';

export default () => {
  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://jsm-challenges.s3.amazonaws.com'
  })
}