import { Reducer } from "redux";
import { ProductAction, ProductState } from "./types";

const INITIAL_STATE_CONTROL_PRODUCT: ProductState = {};

const ProductReducer: Reducer = (
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

    default:
      return state;
  }
};

export default ProductReducer;
