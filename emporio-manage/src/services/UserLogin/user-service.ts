import { api } from "../api";

const UsersService = {
  login: (user: any) => api.post("/login", user),
  details: (id: number) => api.get(`/users/${id}`),
};

export default UsersService;
