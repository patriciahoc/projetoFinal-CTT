import { takeLatest, all } from "redux-saga/effects";

import { UserAction } from "./userLogin/types";
import { login } from "./userLogin/sagas";

import { ProductAction } from "./product/types";
import { deleteProducts, getProducts, postProducts } from "./product/sagas";

import { ControlUsersAction } from "./controlUsers/types";
import { postControlUsers, getControlUsers } from "./controlUsers/sagas";

export default function* rootSaga(): any {
  return yield all([
    takeLatest(UserAction.POST_LOGIN_REQUEST, login),
    takeLatest(ProductAction.POST_PRODUCT_REQUEST, postProducts),
    takeLatest(ProductAction.GET_PRODUCT_REQUEST, getProducts),
    takeLatest(ProductAction.DEL_PRODUCT_REQUEST, deleteProducts),
    takeLatest(ControlUsersAction.POST_CONTROL_USERS_REQUEST, postControlUsers),
    takeLatest(ControlUsersAction.GET_CONTROL_USERS_REQUEST, getControlUsers),
  ]);
}
