import { combineReducers } from "redux";
import authReducer from "./auth";

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
