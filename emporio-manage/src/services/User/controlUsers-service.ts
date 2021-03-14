import api from "../api";

const ControlUsersService = {
  getUsers: (user: any) => api.get("/users?role=admin&role=editor", user),
  deleteUsers: (user: any) => api.delete(`/users/${user.id}`),
  postUsers: (user: any) => api.post("/users/", user),
};

export default ControlUsersService;
