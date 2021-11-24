import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: "GregData",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  },
});
