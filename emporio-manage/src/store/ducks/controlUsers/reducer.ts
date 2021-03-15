import { Reducer } from "redux";
import { ControlUsersAction, ControlUsersState } from "./types";

const INITIAL_STATE_CONTROL_USER: ControlUsersState = {
  items: [],
  loading: false,
  error: false,
};

const ControlUsersReducer: Reducer = (
  state = INITIAL_STATE_CONTROL_USER,
  action: any
) => {
  switch (action.type) {
    case ControlUsersAction.POST_CONTROL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ControlUsersAction.POST_CONTROL_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        loading: false,
        error: false,
      };
    case ControlUsersAction.POST_CONTROL_USERS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ControlUsersAction.GET_CONTROL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ControlUsersAction.GET_CONTROL_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.data,
        loading: false,
        error: false,
      };
    case ControlUsersAction.GET_CONTROL_USERS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case ControlUsersAction.DEL_CONTROL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ControlUsersAction.DEL_CONTROL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };
    case ControlUsersAction.DEL_CONTROL_USERS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default ControlUsersReducer;
