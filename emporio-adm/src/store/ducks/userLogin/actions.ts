import { action } from "typesafe-actions";
import { UserAction } from "./types";

export const postLoginRequest = (user: any) =>
  action(UserAction.POST_LOGIN_REQUEST, user);

export const postLoginSuccess = (data: any) =>
  action(UserAction.POST_LOGIN_SUCCESS, data);

export const postLoginFailure = () => action(UserAction.POST_LOGIN_FAILURE);

export const postLoginClose = () => action(UserAction.POST_LOGIN_CLOSE);
