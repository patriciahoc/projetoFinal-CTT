export enum UserAction {
  POST_LOGIN_FAILURE = "@user/POST_LOGIN_FAILURE",
  POST_LOGIN_SUCCESS = "@user/POST_LOGIN_SUCCESS",
  POST_LOGIN_REQUEST = "@user/POST_LOGIN_REQUEST",
  POST_LOGIN_CLOSE = "@user/POST_LOGIN_CLOSE",
}

export interface UserState {
  id: number | undefined;
  name: string | undefined;
  accessToken: string | undefined;
  role: string | undefined;
  loading: boolean;
  error: boolean;
}

export interface UserResponse {
  data: UserResponseData;
}

export interface UserResponseData {
  accessToken: string;
}
