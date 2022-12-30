import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://readable-server-production.up.railway.app",
  headers: {
    Authorization: "GregData",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  },
});
