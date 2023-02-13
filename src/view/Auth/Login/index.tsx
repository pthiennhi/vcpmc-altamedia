// import "./Login.css";
import '../styles.scss';
import React, { useState } from 'react';
import { logo_vcpmc } from '@assets/images';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Checkbox } from 'antd';
const Login = () => {
  return (
    <div className="login">
      <div className="d-flex justify-content-end language">
        <ChangeLanguage />
      </div>

      <div className="flex-column d-flex gap-5">
        <div className="d-flex justify-content-center">
          <div className="logo">
            <img width={240} src={logo_vcpmc} alt="vcpmc" />
          </div>
        </div>
        <h1 className="login-title text-center">Đăng nhập</h1>
        <Form id='login-form'>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <label htmlFor="username">Tên đăng nhập</label>
            <Input className='login-username'/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <label htmlFor="password">Password</label>
            <Input.Password type='password' className='login-password' />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" >
            <Checkbox className='remember-checkbox'>Ghi nhớ đăng nhập</Checkbox>
          </Form.Item>

          <Form.Item className='login-btn-item'>
            <Button className='login-btn' type="primary" htmlType="submit">
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
