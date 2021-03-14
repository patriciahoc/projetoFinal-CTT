import { combineReducers } from "redux";

import usersReducer from "./userLogin/reducer";
import controlUsersReducer from "./controlUsers/reducer";
import ProductReducer from "./product/reducer";

const createRootReducer = () =>
  combineReducers({
    usersReducer,
    controlUsersReducer,
    ProductReducer,
  });

export default createRootReducer;
