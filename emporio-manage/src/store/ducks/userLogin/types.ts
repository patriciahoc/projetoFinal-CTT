export enum UserAction {
  POST_LOGIN_FAILURE = "@user/POST_LOGIN_FAILURE",
  POST_LOGIN_SUCCESS = "@user/POST_LOGIN_SUCCESS",
  POST_LOGIN_REQUEST = "@user/POST_LOGIN_REQUEST",
}

export interface UserState {
  accessToken: string | undefined;
  role: number | undefined;
  loading: boolean;
  error: boolean;
}

export interface UserResponse {
  accessToken: string;
}
