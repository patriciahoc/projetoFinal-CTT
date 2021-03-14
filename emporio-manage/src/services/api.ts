import axios from "axios";

const ApiUrl = "http://localhost:4000";

export const api = axios.create({
  baseURL: ApiUrl,
});

export const headers = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
