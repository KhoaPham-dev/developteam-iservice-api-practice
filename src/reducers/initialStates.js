import * as cookies from "../utils/cookies";
export const INITIAL_AUTH_STATE = {
  isAuthUser: !!cookies.getCookie("session_id"),
  isLoading: false,
  error: null,
};
