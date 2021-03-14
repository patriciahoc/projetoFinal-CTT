import { call, put } from "redux-saga/effects";
import {
  delControlUsersFailure,
  delControlUsersSuccess,
  getControlUsersFailure,
  getControlUsersSuccess,
  postControlUsersFailure,
  postControlUsersSuccess,
} from "./actions";
import { ControlUsersReponse } from "./types";
import ControlUsersService from "../../../services/User/controlUsers-service";

export function* postControlUsers(action: any) {
  try {
    const response: ControlUsersReponse = yield call(
      ControlUsersService.postUsers,
      action.payload
    );

    yield put(postControlUsersSuccess(response));
  } catch (error) {
    yield put(postControlUsersFailure());
  }
}

export function* getControlUsers(action: any) {
  try {
    const response: ControlUsersReponse = yield call(
      ControlUsersService.getUsers,
      action.payload
    );

    yield put(getControlUsersSuccess(response));
  } catch (error) {
    yield put(getControlUsersFailure());
  }
}

export function* delControlUsers(action: any) {
  try {
    const response: ControlUsersReponse = yield call(
      ControlUsersService.deleteUsers,
      action.payload
    );

    yield put(delControlUsersSuccess(response));
  } catch (error) {
    yield put(delControlUsersFailure());
  }
}
