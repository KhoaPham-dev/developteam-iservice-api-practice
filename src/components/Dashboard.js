import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

export default connect(({ auth, groups }) => ({ auth, groups }))((props) => {
  return <div>abc</div>;
});
