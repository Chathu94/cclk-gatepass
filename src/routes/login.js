import React from 'react';
import { Button, WhiteSpace, InputItem, WingBlank } from 'antd-mobile';
import { Link } from 'react-router-dom';

import './login.css';
import Logo from '../assets/commercial-credit-logo.png';

const LoginRoute = () => {
  return (<WingBlank className="page">
    <img className="logo" src={Logo} />
    <WhiteSpace size="lg" />
    <InputItem
      clear
      placeholder=""
    >Username</InputItem>
    <WhiteSpace size="lg" />
    <InputItem
      type="password"
      clear
      placeholder=""
    >Password</InputItem>
    <WhiteSpace size="lg" />
    <Link to="/home">
      <Button type="primary">Sign In</Button>
    </Link>
  </WingBlank>);
};

export default LoginRoute;
