import { takeLatest, all } from "redux-saga/effects";

import { UserAction } from "./userLogin/types";
import { login } from "./userLogin/sagas";

import { ProductAction } from "./product/types";
import { postProducts } from "./product/sagas";

import { ControlUsersAction } from "./controlUsers/types";
import { postControlUsers } from "./controlUsers/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserAction.POST_LOGIN_REQUEST, login),
    takeLatest(ProductAction.POST_PRODUCT_REQUEST, postProducts),
    takeLatest(ControlUsersAction.POST_CONTROL_USERS_REQUEST, postControlUsers),
  ]);
}
