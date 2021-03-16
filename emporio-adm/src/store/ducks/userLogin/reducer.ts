import { Reducer } from "redux";
import { UserAction, UserState } from "./types";

const INITIAL_STATE_USER_LOGIN: UserState = {
  id: undefined,
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
      return {
        ...state,
        loading: false,
        error: false,
        accessToken: action.payload.data.accessToken,
        id: action.payload.data.id,
        name: action.payload.data.name,
        role: action.payload.data.role,
      };
    case UserAction.POST_LOGIN_FAILURE:
      return {
        ...INITIAL_STATE_USER_LOGIN,
        error: true,
      };
    case UserAction.POST_LOGIN_CLOSE:
      return INITIAL_STATE_USER_LOGIN;

    default:
      return state;
  }
};

export default usersReducer;
