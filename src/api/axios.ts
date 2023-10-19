import axios from "axios";

const request = axios.create({
  baseURL: "https://api-to-do-2hxx.onrender.com",
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default request;
