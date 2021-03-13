import userApi from "./api";

const UsersService = {
  login: (user: any) => userApi.post("/login", user),
};

export default UsersService;
