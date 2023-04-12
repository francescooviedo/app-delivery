import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestLogin } from '../Helpers/api';
import { Input, Button, ErrorMessage } from '../inputNButtons';
import { loginError } from '../inputNButtons/errorMessages';
// import '../Css/login.css';

export default function Login() {
  const [enableButton, setButton] = useState(true);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [failedLogin, setfailedlogin] = useState(false);
  const history = useHistory();
  const SIX = 6;

  useEffect(() => {
    if (localStorage.getItem('user')) {
      history.push('/customer/products');
    }
    const isValidForm = (InputEmail, InputPassword) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(InputEmail) && InputPassword.length >= SIX;
    if (!isValidForm(email, password)) {
      setButton(true);
    }
    if (isValidForm(email, password)) {
      setButton(false);
    }
  }, [email, history, password]);

  const enterApp = async () => {
    const { name, role, token } = await requestLogin('/login', { email, password });
    if (!token) {
      setfailedlogin(true);
    }
    if (token) {
      localStorage.setItem('user', JSON.stringify({ email, name, role, token }));
      switch (role) {
      case 'administrator': history.push('/admin/manage');
        break;
      case 'customer': history.push('/customer/products');
        break;
      case 'seller': history.push('/seller/orders');
        break;
      default: history.push('/');
      }
    }
  };

  const register = () => {
    history.push('/register');
  };
  return (
    <div className="loginContainer">
      <form className="Login">
        <Input
          htmlFor="email-input"
          label="Email"
          testid="common_login__input-email"
          type="text"
          name="name"
          value={ email }
          onChange={ (e) => setemail(e.target.value) }
        />
        <Input
          htmlFor="pssword-input"
          label="Password"
          testid="common_login__input-password"
          type="password"
          name="password"
          value={ password }
          onChange={ (e) => setpassword(e.target.value) }
        />
        <br />
        <br />
        <Button
          label="login"
          testid="common_login__button-login"
          onClick={ () => enterApp() }
          disabled={ enableButton }
        />
        <Button
          label="register"
          testid="common_login__button-register"
          onClick={ () => register() }
        />
        {
          (failedLogin)
            ? (
              <ErrorMessage
                testid="common_login__element-invalid-email"
                message={ loginError }
              />
            )
            : null
        }
      </form>
    </div>
  );
}
