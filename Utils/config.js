import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5000" || "https://readabl-e.herokuapp.com",
  headers: {
    Authorization: "GregData",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  },
});
