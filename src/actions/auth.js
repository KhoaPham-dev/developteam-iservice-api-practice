import actionTypes from "../constants/actionTypes";

export const loginRequest = ({ username, password }) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = ({ user }) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { user },
});

export const handleError = (errorMessage) => ({
  type: actionTypes.HANDLE_ERROR,
  payload: { error: errorMessage },
});
export const logoutRequest = ({ token }) => ({
  type: actionTypes.LOGOUT_REQUEST,
  payload: {
    token,
  },
});
export const logoutSuccess = () => ({ type: actionTypes.LOGOUT_SUCCESS });
