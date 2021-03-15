import { call, put } from "redux-saga/effects";
import { decodeToken } from "react-jwt";
import { postLoginFailure, postLoginSuccess } from "./actions";
import { UserResponse } from "./types";
import UsersService from "../../../services/UserLogin/user-service";

export function* login(action: any) {
  try {
    const { data }: UserResponse = yield call(
      UsersService.login,
      action.payload
    );

    localStorage.setItem("token", data.accessToken);

    const decodedToken = decodeToken(data.accessToken);

    const response: UserResponse = yield call(
      UsersService.details,
      decodedToken.sub
    );

    yield put(postLoginSuccess(response));
  } catch (error) {
    yield put(postLoginFailure());
  }
}
