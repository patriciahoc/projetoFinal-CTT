import { api } from "../api";

const UsersService = {
  login: (user: any) => api.post("/login", user),
};

export default UsersService;
