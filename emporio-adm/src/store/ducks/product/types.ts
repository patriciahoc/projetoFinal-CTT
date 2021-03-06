export enum ProductAction {
  POST_PRODUCT_FAILURE = "@product/POST_PRODUCT_FAILURE",
  POST_PRODUCT_SUCCESS = "@product/POST_PRODUCT_SUCCESS",
  POST_PRODUCT_REQUEST = "@product/POST_PRODUCT_REQUEST",

  GET_PRODUCT_FAILURE = "@product/GET_PRODUCT_FAILURE",
  GET_PRODUCT_SUCCESS = "@product/GET_PRODUCT_SUCCESS",
  GET_PRODUCT_REQUEST = "@product/GET_PRODUCT_REQUEST",

  DEL_PRODUCT_FAILURE = "@product/DEL_PRODUCT_FAILURE",
  DEL_PRODUCT_SUCCESS = "@product/DEL_PRODUCT_SUCCESS",
  DEL_PRODUCT_REQUEST = "@product/DEL_PRODUCT_REQUEST",
}

export interface ProductState {
  items: Product[];
  loading: boolean;
  error: boolean;
}

export interface Product {
  title: string;
  price: string;
  description: string;
  image: string;
  id: number;
}
