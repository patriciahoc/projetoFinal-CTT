import { Reducer } from "redux";
import { UserAction, UserState } from "./types";
import { decodeToken } from "react-jwt";

const INITIAL_STATE_USER: UserState = {
  accessToken: undefined,
  loading: false,
  error: false,
  role: undefined,
};

const usersReducer: Reducer = (state = INITIAL_STATE_USER, action: any) => {
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
      };
    case UserAction.POST_LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default usersReducer;
