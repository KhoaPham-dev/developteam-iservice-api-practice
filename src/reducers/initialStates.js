export const INITIAL_AUTH_STATE = {
  isAuthUser: !!localStorage.getItem("user"),
  user: JSON.parse(localStorage.getItem("user")) || {},
  isLoading: false,
  error: null,
};
