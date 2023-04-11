import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestRegister } from '../Helpers/api';
import { Input, Button, ErrorMessage } from '../inputNButtons';
import { loginError } from '../inputNButtons/errorMessages';

export default function Register() {
  const [enableButton, setButton] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');
  const [failedRegister, setfailedRegister] = useState(false);
  const history = useHistory();
  const SIX = 6;
  const TWELVE = 12;

  useEffect(() => {
    const isValidForm = (InputEmail, InputPassword, inputName) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(InputEmail) && InputPassword.length >= SIX && inputName.length > TWELVE;
    console.log(isValidForm(email, password, name));
    if (isValidForm(email, password, name)) {
      setButton(false);
    }
    if (!isValidForm(email, password, name)) {
      setButton(true);
    }
  }, [email, password, name]);

  const register = async () => {
    const { token } = await requestRegister(
      '/register',
      { name, email, password, role: 'customer' },
    );
    if (!token) {
      setfailedRegister(true);
    }
    if (token) {
      localStorage.setItem('user', JSON.stringify(
        { email, name, role: 'customer', token },
      ));
      history.push('/customer/products');
    }

    setfailedRegister(true);
  };

  return (
    <div className="registerForm">
      <form className="RegisterFormComponent">
        <Input
          htmlFor="name-input"
          label="name"
          testid="common_register__input-name"
          type="text"
          name="name"
          value={ name }
          onChange={ (e) => setname(e.target.value) }
        />
        <Input
          htmlFor="email-input"
          label="email"
          testid="common_register__input-email"
          type="email"
          name="email"
          value={ email }
          onChange={ (e) => setemail(e.target.value) }
        />
        <Input
          htmlFor="password-input"
          label="password"
          testid="common_register__input-password"
          type="password"
          name="password"
          value={ password }
          onChange={ (e) => setpassword(e.target.value) }
        />
        <Button
          label="register"
          testid="common_register__button-register"
          onClick={ () => register() }
          disabled={ enableButton }
        />
        {
          (failedRegister)
            ? (
              <ErrorMessage
                testid="common_register__element-invalid_register"
                message={ loginError }
              />
            )
            : null
        }
      </form>
    </div>
  );
}
