// import "./Login.css";
import '../styles.scss';
import React, { useState } from 'react';
import { logo_vcpmc } from '@assets/images';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { Link } from 'react-router-dom';
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
        <div className="d-flex flex-column m-auto text-start gap-4">
          <div className="login-username d-flex flex-column m-auto text-start">
            <span>Tên đăng nhập</span>
            <input type="text" required />
          </div>
          <div className="login-password d-flex flex-column m-auto text-start">
            <span>Password</span>
            <input type="password" required />
          </div>
          <div className="form-check remember-checkbox d-flex flex-row gap-3 justify-content-start">
            <input className="form-check-input" type="checkbox" value="" id="ghinho" />
            <label className="form-check-label" htmlFor="ghinho">
              Ghi nhớ đăng nhập
            </label>
          </div>
          <button type="button" className="btn btn-login m-auto">
            Đăng nhập
          </button>
        </div>
      </div>
      <div className='forgot-password d-flex justify-content-center'>
        <Link to="#" className="forgot-password-text">Quên mật khẩu?</Link>
      </div>
    </div>
  );
};

export default Login;
