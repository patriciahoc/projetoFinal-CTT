export enum ControlUsersAction {
  POST_CONTROL_USERS_FAILURE = "@controlUsers/POST_CONTROL_USERS_FAILURE",
  POST_CONTROL_USERS_SUCCESS = "@controlUsers/POST_CONTROL_USERS_SUCCESS",
  POST_CONTROL_USERS_REQUEST = "@controlUsers/POST_CONTROL_USERS_REQUEST",

  GET_CONTROL_USERS_FAILURE = "@controlUsers/GET_CONTROL_USERS_FAILURE",
  GET_CONTROL_USERS_SUCCESS = "@controlUsers/GET_CONTROL_USERS_SUCCESS",
  GET_CONTROL_USERS_REQUEST = "@controlUsers/GET_CONTROL_USERS_REQUEST",

  DEL_CONTROL_USERS_FAILURE = "@controlUsers/DEL_CONTROL_USERS_FAILURE",
  DEL_CONTROL_USERS_SUCCESS = "@controlUsers/DEL_CONTROL_USERS_SUCCESS",
  DEL_CONTROL_USERS_REQUEST = "@controlUsers/DEL_CONTROL_USERS_REQUEST",
}

export interface ControlUsersState {
  items: ControlUsers[];
  loading: boolean;
  error: boolean;
}

export interface ControlUsers {
  name: string;
  email: string;
  password: number;
  role: string;
}
