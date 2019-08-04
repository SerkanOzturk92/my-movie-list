import axios from 'axios';
import {API_KEY, BASE_URL} from "../utils/constant";

export const axiosGlobal = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY
  }
});