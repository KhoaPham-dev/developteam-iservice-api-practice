import React from "react";
import { connect } from "react-redux";
import { Link, browserHistory } from "react-router";

import GroupList from "./GroupList";
import Logout from "./Logout";
export default connect(({ auth, groups }) => ({ auth, groups }))((props) => {
  if (!props.auth.isAuthUser) {
    browserHistory.push("/");
  }
  return (
    <div>
      <div style={{ float: "right", margin: "5px 10px" }}>
        <Logout />
      </div>

      <GroupList />
    </div>
  );
});
