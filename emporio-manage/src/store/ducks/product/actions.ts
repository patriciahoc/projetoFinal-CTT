import { action } from "typesafe-actions";
import { ProductAction } from "./types";

export const postProductRequest = (product: any) =>
  action(ProductAction.POST_PRODUCT_REQUEST, product);

export const postProductSuccess = (data: any) =>
  action(ProductAction.POST_PRODUCT_SUCCESS, data);

export const postProductFailure = () =>
  action(ProductAction.POST_PRODUCT_FAILURE);

export const getProductRequest = () =>
  action(ProductAction.GET_PRODUCT_REQUEST);

export const getProductSuccess = (data: any) =>
  action(ProductAction.GET_PRODUCT_SUCCESS, data);

export const getProductFailure = () =>
  action(ProductAction.GET_PRODUCT_FAILURE);

export const delProductRequest = (product: any) =>
  action(ProductAction.DEL_PRODUCT_REQUEST, product);

export const delProductSuccess = (data: any) =>
  action(ProductAction.DEL_PRODUCT_SUCCESS, data);

export const delProductFailure = () =>
  action(ProductAction.DEL_PRODUCT_FAILURE);
