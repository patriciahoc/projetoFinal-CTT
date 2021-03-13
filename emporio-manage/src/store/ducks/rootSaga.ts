import { takeLatest, all } from "redux-saga/effects";
import { UserAction } from "./user/types";
import { login } from "./user/sagas";

export default function* rootSaga(): any {
  return yield all([takeLatest(UserAction.POST_LOGIN_REQUEST, login)]);
}
