import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `http://40.112.53.192:7020`,
})