import axios from "axios";

const API = "http://localhost:8000/";

export const Axios = axios.create({
  baseURL: API,
});
