import { action } from "typesafe-actions";
import { ControlUsersAction } from "./types";

export const postControlUsersRequest = (user: any) =>
  action(ControlUsersAction.POST_CONTROL_USERS_REQUEST, user);

export const postControlUsersSuccess = (data: any) =>
  action(ControlUsersAction.POST_CONTROL_USERS_SUCCESS, data);

export const postControlUsersFailure = () =>
  action(ControlUsersAction.POST_CONTROL_USERS_FAILURE);

export const getControlUsersRequest = () =>
  action(ControlUsersAction.GET_CONTROL_USERS_REQUEST);

export const getControlUsersSuccess = (data: any) =>
  action(ControlUsersAction.GET_CONTROL_USERS_SUCCESS, data);

export const getControlUsersFailure = () =>
  action(ControlUsersAction.GET_CONTROL_USERS_FAILURE);

export const delControlUsersRequest = (user: any) =>
  action(ControlUsersAction.DEL_CONTROL_USERS_REQUEST, user);

export const delControlUsersSuccess = (data: any) =>
  action(ControlUsersAction.DEL_CONTROL_USERS_SUCCESS, data);

export const delControlUsersFailure = () =>
  action(ControlUsersAction.DEL_CONTROL_USERS_FAILURE);
