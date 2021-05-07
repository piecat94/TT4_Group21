import { Form, Input, Button, Checkbox } from 'antd';
import { OmitProps } from 'antd/lib/transfer/ListBody';
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const layout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = (props) => {

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={props.onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
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
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>

   
      <Button type="primary" 
      htmlType="submit">
          Submit
        </Button>
        {//<Link 
        //style = {{color : "black",
        //backgroundColor: "DodgerBlue",
        //padding: "10px"}}
        //to = "/Dashboard"
        //onClick = {props.setLogin}
        //>Submit</Link>/*
}
      </Form.Item>
    </Form>
  );
};

export default LoginForm