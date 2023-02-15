// import "./Login.css";
import '../styles.scss';
import React, { useState } from 'react';
import { logo_vcpmc } from '@assets/images';
import ChangeLanguage from '@shared/components/ChangeLanguage';
import { Link } from 'react-router-dom';
import { Input, Form, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router';
const ForgotPassword = () => {
  
  return (
    <div className="forgot-password">
      <div className="d-flex justify-content-end language">
        <ChangeLanguage />
      </div>

      <div className="flex-column d-flex gap-5">
        <div className="d-flex justify-content-center">
          <div className="logo">
            <img width={240} src={logo_vcpmc} alt="vcpmc" />
          </div>
        </div>
        <h1 className="forgot-password-title text-center">Khôi phục mật khẩu</h1>
        
      </div>
    </div>
  );
};

export default ForgotPassword;
