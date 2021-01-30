import actionTypes from "../constants/actionTypes";
import { INITIAL_AUTH_STATE } from "./initialStates";
import * as cookies from "../utils/cookies";
const authReducer = (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypes.LOGIN_SUCCESS: {
      cookies.setCookie("session_id", action.payload.user.token, 1);
      return {
        ...state,
        isAuthUser: action.payload.user.token,
        isLoading: false,
      };
    }
    case actionTypes.HANDLE_ERROR: {
      return {
        ...state,
        error: action.payload.error,
        isLoading: false,
      };
    }
    case actionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthUser: false,
      };
    }
    default:
      return { ...state };
  }
};
export default authReducer;
