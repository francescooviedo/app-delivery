import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GenericInput, GenericSpan, GenericButton } from '../Components';
import { emailValidation, passwordValidation } from '../utils/validations';

class Login extends Component {
  state = {
    email: '',
    password: '',
    lockEmail: true,
    lockPassword: true,
    errorMessageStatus: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    this.loginValidation(name, value);
  };

  loginValidation = (name, value) => {
    if (name === 'email') {
      const result = emailValidation(value);
      this.setState({
        lockEmail: !result,
      });
    }
    if (name === 'password') {
      const result = passwordValidation(value);
      this.setState({
        lockPassword: !result,
      });
    }
  };

  render() {
    const { email, password, lockEmail, lockPassword, errorMessageStatus } = this.state;
    return (
      <form action="" className="loginForm">
        <h1>Delivery da dona Tereza</h1>
        <GenericInput
          type="email"
          value={ email }
          labelText="Login"
          handleChange={ this.handleChange }
          dataTestId="common_login__input-email"
        />
        <GenericInput
          type="password"
          value={ password }
          labelText="Senha"
          handleChange={ this.handleChange }
          dataTestId="common_login__input-password"
        />
        <GenericButton
          type="submit"
          value="Login"
          disabled={ !(!lockEmail && !lockPassword) } // !lockEmail && !lockPassword ? false : true;
          dataTestId="common_login__button-login"
        />
        <Link to="/register">
          <GenericButton
            type="button"
            value="Ainda não tenho conta"
            dataTestId="common_login__button-register"
          />
        </Link>
        <GenericSpan
          hidden={ errorMessageStatus }
          errorMessage="Email ou Senha invalidos"
          dataTestId="common_login__element-invalid-email"
        />
      </form>
    );
  }
}

export default Login;
