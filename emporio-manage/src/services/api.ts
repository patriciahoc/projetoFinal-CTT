import axios from "axios";

const ApiUrl = "http://localhost:4000";

const api = axios.create({
  baseURL: ApiUrl,
});

export default api;
