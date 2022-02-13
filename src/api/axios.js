import axios from "axios";

 const axiosClient = axios.create({
  baseUrl: "https://mobilelemanh.herokuapp.com/api",
  headers: { "Content-Type": "application/json" },
});

 export default axiosClient;