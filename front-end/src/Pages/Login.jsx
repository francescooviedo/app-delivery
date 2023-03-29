import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    
  }


   handleChange() =>  {

  }

  render() {
    return (
      <h1>Hello World Login</h1>
    );
  }
}

Login.propTypes = {

};

export default Login;

/* import apiCall from '../Helpers/apiCall';

export default function Login() {
  useEffect(() => {
    const apicall = async () => {
      const response = await apiCall();
      const result = await response;
      console.log(result);
    };
    apicall();
  });
  return (
    <div className="loginForm">
      <form className="LoginFormComponent">
        <h4>email</h4>
        <input
          type="text"
          data-testid="email-input"
          // value={ email }
          // onChange={ (e) => setemail(e.target.value) }
        />
        <h4>password</h4>
        <input
          type="password"
          data-testid="password-input"
          // value={ password }
        //   onChange={ (e) => setpassword(e.target.value) }
        />
        <br />
        <br />
        <button
          type="button"
          data-testid="login-submit-btn"
        //   onClick={ () => enterApp() }
        //   disabled={ enableButton }
        >
          Enter
        </button>
      </form>
    </div>
  );
} */
