import { takeEvery, takeLatest } from "redux-saga/effects";
import { loginRequest, logoutRequest } from "./auth";
import {
  getGroupsRequest,
  editGroupRequest,
  removeGroupRequest,
} from "./groups";
import actionTypes from "../constants/actionTypes";

export function* watchLoginRequest() {
  yield takeLatest(actionTypes.LOGIN_REQUEST, loginRequest);
}
export function* watchGetGroupsRequest() {
  yield takeEvery(actionTypes.GET_GROUPS_REQUEST, getGroupsRequest);
}
export function* watchEditGroupRequest() {
  yield takeLatest(actionTypes.EDIT_GROUPS_REQUEST, editGroupRequest);
}
export function* watchRemoveGroupRequest() {
  yield takeLatest(actionTypes.REMOVE_GROUPS_REQUEST, removeGroupRequest);
}
export function* watchLogoutRequest() {
  yield takeLatest(actionTypes.LOGOUT_REQUEST, logoutRequest);
}
