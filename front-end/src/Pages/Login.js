import React, { useEffect, useState } from 'react';
import apiCall from '../Helpers/apiCall';

export default function Login() {
  const [enableButton, setButton] = useState(true);
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  useEffect(() => {
    const verifyEmail = '@';
    const verifyEmailDot = '.com';
    const minPassword = 7;
    const validEmail = email.includes(verifyEmail) && email.includes(verifyEmailDot);
    const validPassword = password.length >= minPassword;
    const finalValidation = validEmail && validPassword;
    if (password.length < minPassword) {
      setButton(true);
    }
    if (finalValidation) {
      setButton(false);
    }
  }, [email, password, name]);
  const apicall = async () => {
    const role = 'user';
    const response = await apiCall({ name, email, password, role });
    const result = await response;
    console.log(result);
  };
  return (
    <div className="loginForm">
      <form className="LoginFormComponent">
        <h4>name</h4>
        <input
          type="text"
          data-testid="email-input"
          value={ name }
          onChange={ (e) => setname(e.target.value) }
        />
        <h4>email</h4>
        <input
          type="text"
          data-testid="email-input"
          value={ email }
          onChange={ (e) => setemail(e.target.value) }
        />
        <h4>password</h4>
        <input
          type="password"
          data-testid="password-input"
          value={ password }
          onChange={ (e) => setpassword(e.target.value) }
        />
        <br />
        <br />
        <button
          type="button"
          data-testid="login-submit-btn"
          onClick={ () => apicall() }
          disabled={ enableButton }
        >
          Enter
        </button>
      </form>
    </div>
  );
}
