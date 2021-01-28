import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import "antd/dist/antd.css";

import { loginRequest } from "../actions/auth";

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 6,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 10,
    span: 6,
  },
};
export default connect(({ auth }) => ({ auth }))((props) => {
  //console.log(props);
  const onFinish = (values) => {
    props.dispatch(
      loginRequest({ username: values.username, password: values.password })
    );
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      {...layout}
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
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Nhớ mật khẩu</Checkbox>
      </Form.Item>
      {props.auth.error ? (
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      ) : null}
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Đăng nhập
        </Button>
      </Form.Item>
    </Form>
  );
});
