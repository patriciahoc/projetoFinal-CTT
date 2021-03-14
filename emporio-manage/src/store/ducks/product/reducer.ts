import { Reducer } from "redux";
import { ProductAction, ProductState } from "./types";

const INITIAL_STATE_CONTROL_PRODUCT: ProductState = {
  items: [],
};

const productsReducer: Reducer = (
  state = INITIAL_STATE_CONTROL_PRODUCT,
  action: any
) => {
  switch (action.type) {
    case ProductAction.POST_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ProductAction.POST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case ProductAction.POST_PRODUCT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case ProductAction.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ProductAction.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        loading: false,
        error: false,
      };
    case ProductAction.GET_PRODUCT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    case ProductAction.DEL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ProductAction.DEL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case ProductAction.DEL_PRODUCT_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
