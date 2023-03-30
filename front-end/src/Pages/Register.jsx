import React, { Component } from 'react';
import GenericInput from '../Components';
/* import PropTypes from 'prop-types'; */
/* import { Link } from 'react-router-dom'; */

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    termosDeUso: false,
    /* role: '', */
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, password, termosDeUso } = this.state;
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
          labelText="Login"
          handleChange={ this.handleChange }
          dataTestId="common_register__input-password"
        />

        <label htmlFor="termosDeUso">
          <input type="checkbox" name="termosDeUso" checked={ termosDeUso } />
          Você aceita os termos de dona Tereza?
        </label>

        <button
          type="submit"
          data-testid="common_login__button-login"
        >
          CADASTRAR
        </button>

        <span
          data-testid="common_login__element-invalid-email"
        >
          Elemento oculto (Mensagem de erro)
        </span>

      </form>
    );
  }
}

/* Login.propTypes = {

}; */

export default Register;
