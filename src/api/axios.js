import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 2000,
});

export default instance;
