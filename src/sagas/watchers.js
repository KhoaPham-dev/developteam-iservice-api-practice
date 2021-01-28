import { takeLatest } from "redux-saga/effects";
import { loginRequest } from "./auth";
import actionTypes from "../constants/actionTypes";

export default function* watchLoginRequest() {
  yield takeLatest(actionTypes.LOGIN_REQUEST, loginRequest);
}
