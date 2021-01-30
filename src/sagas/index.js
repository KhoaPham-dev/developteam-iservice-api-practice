import { fork } from "redux-saga/effects";
import {
  watchLoginRequest,
  watchGetGroupsRequest,
  watchEditGroupRequest,
  watchRemoveGroupRequest,
  watchLogoutRequest,
} from "./watchers";

export default function* startForman() {
  yield fork(watchLoginRequest);
  yield fork(watchGetGroupsRequest);
  yield fork(watchEditGroupRequest);
  yield fork(watchRemoveGroupRequest);
  yield fork(watchLogoutRequest);
}
