import { action } from "typesafe-actions";
import { ControlUsersAction } from "./types";

export const postControlUsersRequest = (users: any) =>
  action(ControlUsersAction.POST_CONTROL_USERS_REQUEST, users);

export const postControlUsersSuccess = (data: any) =>
  action(ControlUsersAction.POST_CONTROL_USERS_SUCCESS, data);

export const postControlUsersFailure = () =>
  action(ControlUsersAction.POST_CONTROL_USERS_FAILURE);

export const getControlUsersRequest = (users: any) =>
  action(ControlUsersAction.GET_CONTROL_USERS_REQUEST, users);

export const getControlUsersSuccess = (data: any) =>
  action(ControlUsersAction.GET_CONTROL_USERS_SUCCESS, data);

export const getControlUsersFailure = () =>
  action(ControlUsersAction.GET_CONTROL_USERS_FAILURE);

export const delControlUsersRequest = (users: any) =>
  action(ControlUsersAction.DEL_CONTROL_USERS_REQUEST, users);

export const delControlUsersSuccess = (data: any) =>
  action(ControlUsersAction.DEL_CONTROL_USERS_SUCCESS, data);

export const delControlUsersFailure = () =>
  action(ControlUsersAction.DEL_CONTROL_USERS_FAILURE);
