import { Reducer } from "redux";
import { UserAction, UserState } from "./types";
import { decodeToken } from "react-jwt";

const INITIAL_STATE_USER_LOGIN: UserState = {
  name: undefined,
  accessToken: undefined,
  loading: false,
  error: false,
  role: undefined,
};

const usersReducer: Reducer = (
  state = INITIAL_STATE_USER_LOGIN,
  action: any
) => {
  switch (action.type) {
    case UserAction.POST_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UserAction.POST_LOGIN_SUCCESS:
      const decodedToken = decodeToken(action.payload.data.accessToken);

      localStorage.setItem("token", action.payload.data.accessToken);

      return {
        ...state,
        loading: false,
        error: false,
        accessToken: action.payload.data.accessToken,
        role: decodedToken.sub,
        name: action.payload.data,
      };
    case UserAction.POST_LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case UserAction.POST_LOGIN_CLOSE:
      localStorage.clear();
      return {
        ...state,
        name: undefined,
        role: undefined,
        accessToken: undefined,
        error: false,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
