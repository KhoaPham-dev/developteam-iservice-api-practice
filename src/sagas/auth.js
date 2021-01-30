import { put, call } from "redux-saga/effects";
import * as api from "../api/api";
import actionTypes from "../constants/actionTypes";
import * as actions from "../actions/auth";

export function* loginRequest({ payload }) {
  try {
    let result = yield call(api.login, {
      username: payload.username,
      password: payload.password,
    });
    console.log(result);
    if (result.data.result) {
      yield put(
        actions.loginSuccess({
          user: result.data.data,
        })
      );
    } else {
      throw new Error(result.data.message);
    }
  } catch (error) {
    console.log(error.message);
    yield put(actions.handleError(error.message));
  }
}
export function* logoutRequest({ payload }) {
  try {
    let result = yield call(api.logout, { token: payload.token });
    console.log(result);
    if (result.data.result) {
      //yield put(actions.logoutSuccess());
    } else {
      throw new Error(result.data.message);
    }
  } catch (error) {
    console.log(error.message);
    //yield put(actions.handleError(error.message));
  } finally {
    yield put(actions.logoutSuccess());
  }
}
