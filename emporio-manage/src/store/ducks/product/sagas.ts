import { call, put } from "redux-saga/effects";
import {
  delProductFailure,
  delProductSuccess,
  getProductFailure,
  getProductSuccess,
  postProductFailure,
  postProductSuccess,
} from "./actions";
import { Product } from "./types";
import ProductService from "../../../services/Product/procuct-service";

export function* postProducts(action: any) {
  try {
    const response: Product = yield call(
      ProductService.postProduct,
      action.payload
    );

    yield put(postProductSuccess(response));
  } catch (error) {
    yield put(postProductFailure());
  }
}

export function* getProducts(action: any) {
  try {
    const response: Product[] = yield call(ProductService.getProduct);

    yield put(getProductSuccess(response));
  } catch (error) {
    yield put(getProductFailure());
  }
}

export function* deleteProducts(action: any) {
  try {
    const response: Product = yield call(
      ProductService.deleteProduct,
      action.payload
    );

    yield put(delProductSuccess(response));
  } catch (error) {
    yield put(delProductFailure());
  }
}
