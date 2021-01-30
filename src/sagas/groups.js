import { put, call } from "redux-saga/effects";
import * as api from "../api/api";
import actionTypes from "../constants/actionTypes";
import * as actions from "../actions/groups";

export function* getGroupsRequest({ payload }) {
  try {
    let result = yield call(api.getGroups, {
      token: payload.token,
      page: payload.page,
      pageSize: payload.pageSize,
    });
    if (result.data.data?.data) {
      yield put(actions.getGroupsSuccess({ items: result.data.data.data }));
    } else {
      throw new Error(result.data.message);
    }
  } catch (error) {
    yield put(actions.handleGroupsError({ error: error.message }));
  }
}
export function* editGroupRequest({ payload }) {
  try {
    let result = yield call(api.editGroup, {
      description: payload.description,
      id: payload.id,
      name: payload.name,
      permissions: payload.permissions,
      token: payload.token,
    });
    if (result.data.result) {
      let result = yield call(api.getGroups, {
        token: payload.token,
        //page: payload.page,
        page: 0,
        pageSize: payload.pageSize,
      });
      if (result.data.data?.data) {
        yield put(
          actions.getGroupsSuccess({
            items: result.data.data.data,
            notice: "success_edited",
          })
        );
      } else {
        throw new Error(result.data.message);
      }
    } else {
      throw new Error(result.data.message);
    }
  } catch (error) {
    yield put(actions.handleGroupsError({ error: error.message }));
  }
}

export function* removeGroupRequest({ payload }) {
  try {
    let result = yield call(api.removeGroup, {
      id: payload.id,
      token: payload.token,
    });
    if (result.data.result) {
      let result = yield call(api.getGroups, {
        token: payload.token,
        //page: payload.page,
        page: 0,
        pageSize: payload.pageSize,
      });
      if (result.data.data?.data) {
        yield put(
          actions.getGroupsSuccess({
            items: result.data.data.data,
            notice: "success_removed",
          })
        );
      } else {
        throw new Error(result.data.message);
      }
    } else {
      throw new Error(result.data.message);
    }
  } catch (error) {
    yield put(actions.handleGroupsError({ error: error.message }));
  }
}
