import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenericInput from '../Components';
/* import PropTypes from 'prop-types'; */

class Login extends Component {
  state = {
    email: '',
    password: '',
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
    const { email, password } = this.state;
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

        <button
          type="submit"
          data-testid="common_login__button-login"
        >
          Login
        </button>

        <Link to="/register">
          <input
            type="button"
            value="Ainda não tenho conta"
            data-testid="common_login__button-register"
          />
        </Link>

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

export default Login;
