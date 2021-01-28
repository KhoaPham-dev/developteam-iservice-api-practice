import actionTypes from "../constants/actionTypes";

export const loginRequest = ({ username, password }) => ({
  type: actionTypes.LOGIN_REQUEST,
  payload: { username, password },
});

export const loginSuccess = ({ user }) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: { user },
});
