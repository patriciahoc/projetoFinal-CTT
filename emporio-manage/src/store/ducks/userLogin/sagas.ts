import { call, put } from "redux-saga/effects";
import { postLoginFailure, postLoginSuccess } from "./actions";
import { UserResponse } from "./types";
import UsersService from "../../../services/UserLogin/user-service";

export function* login(action: any) {
  try {
    const response: UserResponse = yield call(
      UsersService.login,
      action.payload
    );

    yield put(postLoginSuccess(response));
  } catch (error) {
    yield put(postLoginFailure());
  }
}
