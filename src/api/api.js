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
