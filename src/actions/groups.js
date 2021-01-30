import actionTypes from "../constants/actionTypes";

export const getGroupsRequest = ({ token, page, pageSize }) => ({
  type: actionTypes.GET_GROUPS_REQUEST,
  payload: { token, page, pageSize },
});

export const getGroupsSuccess = ({ items, notice }) => ({
  type: actionTypes.GET_GROUPS_SUCCESS,
  payload: {
    items,
    notice,
  },
});
export const handleGroupsError = ({ error }) => ({
  type: actionTypes.HANDLE_GROUPS_ERROR,
  payload: {
    error,
  },
});
export const editGroupRequest = ({
  token,
  page,
  pageSize,
  description,
  id,
  name,
  permissions,
}) => ({
  type: actionTypes.EDIT_GROUPS_REQUEST,
  payload: {
    token,
    page,
    pageSize,
    description,
    id,
    name,
    permissions,
  },
});
export const removeGroupRequest = ({ token, page, pageSize, id }) => ({
  type: actionTypes.REMOVE_GROUPS_REQUEST,
  payload: {
    token,
    page,
    pageSize,
    id,
  },
});
