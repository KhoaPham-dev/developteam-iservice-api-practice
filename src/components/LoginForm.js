import React, { useState } from "react";
import { connect } from "react-redux";
import { browserHistory } from "react-router";
import { Form, Input, Button, Checkbox, Alert, Skeleton } from "antd";
import "antd/dist/antd.css";

import { loginRequest, handleError } from "../actions/auth";
import actionTypes from "../constants/actionTypes";
import "./LoginForm.css";

export default connect(({ auth }) => ({ auth }))((props) => {
  //console.log(props);
  const onFinish = (values) => {
    if (values.remember) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
    props.dispatch(
      loginRequest({ username: values.username, password: values.password })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (props.auth.isAuthUser) {
    browserHistory.push("/dashboard");
  }
  return (
    <Form
      className="login"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
        initialValue={localStorage.getItem("username") || ""}
      >
        <Input />
      </Form.Item>

      <Form.Item
        className="login__password"
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        initialValue={localStorage.getItem("password") || ""}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Nhớ mật khẩu</Checkbox>
      </Form.Item>
      <Form.Item style={{ marginBottom: "0", textAlign: "right" }}>
        {props.auth.isLoading ? (
          <Skeleton.Button active size="large" shape="square" />
        ) : (
          <Button type="primary" htmlType="submit">
            Đăng nhập
          </Button>
        )}
      </Form.Item>
      {props.auth.error ? (
        <Alert
          className="login__alert"
          message="Error"
          description={`${props.auth.error}`}
          type="error"
          showIcon
          closable
          onClose={() => {
            props.dispatch(handleError(""));
          }}
        />
      ) : null}
    </Form>
  );
});
