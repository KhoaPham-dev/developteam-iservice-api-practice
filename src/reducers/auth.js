import actionTypes from "../constants/actionTypes";
import { INITIAL_AUTH_STATE } from "./initialStates";
const authReducer = (state = INITIAL_AUTH_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthUser: true,
        user: action.payload.user,
      };
    }

    default:
      return { ...state };
  }
};
export default authReducer;
