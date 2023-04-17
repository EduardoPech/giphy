import axios from "axios";
const URL_API = process.env.VUE_APP_API_URL_GIPHY;

export const HTTP = axios.create({
  baseURL: URL_API,
});
