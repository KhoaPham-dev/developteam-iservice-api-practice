import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";
import { browserHistory } from "react-router";
import { logoutRequest } from "../actions/auth";
import * as cookies from "../utils/cookies";

export default connect(({ auth, groups }) => ({ auth, groups }))((props) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      type="primary"
      icon={<PoweroffOutlined />}
      loading={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => {
          cookies.deleteCookie("session_id");
          props.dispatch(logoutRequest({ token: props.auth.isAuthUser }));
        }, 1000);
      }}
    >
      Logout
    </Button>
  );
});
