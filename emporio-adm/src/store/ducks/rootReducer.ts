import { combineReducers } from "redux";

import usersReducer from "./userLogin/reducer";
import controlUsersReducer from "./controlUsers/reducer";
import productsReducer from "./product/reducer";

const createRootReducer = () =>
  combineReducers({
    usersReducer,
    controlUsersReducer,
    productsReducer,
  });

export default createRootReducer;
