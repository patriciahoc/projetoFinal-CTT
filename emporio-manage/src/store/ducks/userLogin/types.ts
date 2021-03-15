export enum UserAction {
  POST_LOGIN_FAILURE = "@user/POST_LOGIN_FAILURE",
  POST_LOGIN_SUCCESS = "@user/POST_LOGIN_SUCCESS",
  POST_LOGIN_REQUEST = "@user/POST_LOGIN_REQUEST",
  POST_LOGIN_CLOSE = "@user/POST_LOGIN_CLOSE",
}

export interface UserState {
  name: String | undefined;
  accessToken: string | undefined;
  role: number | undefined;
  loading: boolean;
  error: boolean;
}

export interface UserResponse {
  accessToken: string;
}
