import { fork } from "redux-saga/effects";
import watchLoginRequest from "./watchers";

export default function* startForman() {
  yield fork(watchLoginRequest);
}
