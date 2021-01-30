import axios from "axios";

export const login = ({ username, password }) => {
  let config = {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      username,
      password,
    },
  };
  return axios("account/login", config);
};
export const getGroups = ({ token, page, pageSize }) => {
  let config = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    params: {
      page,
      pageSize,
    },
  };
  return axios("group/list", config);
};
export const editGroup = ({ description, id, name, permissions, token }) => {
  let config = {
    method: "put",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    data: {
      description,
      id,
      name,
      permissions,
    },
  };
  return axios("group/update", config);
};
export const removeGroup = ({ id, token }) => {
  let config = {
    method: "delete",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return axios("group/delete/" + id, config);
};
export const logout = ({ token }) => {
  let config = {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  };
  return axios("account/logout/", config);
};
