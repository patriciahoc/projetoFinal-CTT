import { api } from "../api";

const ControlUsersService = {
  getUsers: (user: any) => api.get("/users?role=admin&role=editor", user),
  deleteUsers: (id: number) => api.delete(`/users/${id}`),
  postUsers: (user: any) => api.post("/users/", user),
};

export default ControlUsersService;
