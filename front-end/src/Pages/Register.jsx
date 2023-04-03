import React, { Component } from 'react';
import { GenericInput, GenericSpan, GenericButton } from '../Components';
import {
  nameValidation,
  emailValidation,
  passwordValidation,
} from '../utils/validations';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    lockEmail: true,
    lockPassword: true,
    lockName: true,
    checkbox: false,
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
    if (name === 'name') {
      const result = nameValidation(value);
      this.setState({
        lockName: !result,
      });
    }
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
    const {
      name,
      email,
      password,
      lockName,
      lockEmail,
      lockPassword,
      checkbox,
      errorMessageStatus,
    } = this.state;
    return (
      <form action="" className="loginForm">
        <h1>Delivery da dona Tereza</h1>
        <h2>Cadastro</h2>
        <GenericInput
          type="name"
          value={ name }
          labelText="Nome"
          handleChange={ this.handleChange }
          dataTestId="common_register__input-name"
        />
        <GenericInput
          type="email"
          value={ email }
          labelText="Email"
          handleChange={ this.handleChange }
          dataTestId="common_register__input-email"
        />
        <GenericInput
          type="password"
          value={ password }
          labelText="Senha"
          handleChange={ this.handleChange }
          dataTestId="common_register__input-password"
        />

        <GenericInput
          type="checkbox"
          value={ checkbox }
          labelText="Você aceita os termos de dona Tereza?"
          handleChange={ this.handleChange }
          dataTestId="common_register__input-password"
        />

        <GenericButton
          type="submit"
          value="CADASTRAR"
          disabled={ !(!lockName && !lockEmail && !lockPassword) } // !lockName && !lockEmail && !lockPassword ? false : true;
          dataTestId="common_login__button-login"
        />

        <GenericSpan
          hidden={ errorMessageStatus }
          errorMessage="Email ou Senha invalidos"
          dataTestId="common_register__element-invalid_register"
        />

      </form>
    );
  }
}

/* Login.propTypes = {

}; */

export default Register;
