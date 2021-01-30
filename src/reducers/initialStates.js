import * as cookies from "../utils/cookies";
export const INITIAL_AUTH_STATE = {
  isAuthUser: cookies.getCookie("session_id"),
  isLoading: false,
  error: null,
};
export const INITIAL_GROUPS_STATE = {
  items: [],
  isLoading: false,
  error: null,
};
