import { combineReducers } from "redux";
import authReducer from "./auth";
import groupsReducer from "./groups";

// Combines all reducers to a single reducer function
const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupsReducer,
});

export default rootReducer;
