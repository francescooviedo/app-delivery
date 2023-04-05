import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiPostGeneric from '../Helpers/apiPostGeneric';
import NavBarAdmin from '../Components/navBarAdmin';

export default function Admin() {
  const [enableButton, setButton] = useState(true);
  const [userName, setuserName] = useState('');
  const [isLoading, setisLoading] = useState(true);
  const [isLogged, setisLogged] = useState(true);
  const [nome, setnome] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  useEffect(() => {
    const verifyEmail = '@';
    const verifyEmailDot = '.com';
    const minPassword = 6;
    const doze = 12;
    const validEmail = email.includes(verifyEmail) && email.includes(verifyEmailDot);
    const validPassword = password.length >= minPassword;
    const finalValidation = validEmail && validPassword;
    if (password.length < minPassword || nome.length < doze || !finalValidation) {
      setButton(true);
    }
    if (finalValidation && nome.length >= doze) {
      setButton(false);
    }

    setisLoading(false);
    const validateUsers = async () => {
      if (JSON.parse(localStorage.getItem('user')) !== null) {
        const { token, name } = JSON.parse(localStorage.getItem('user'));
        const response = await apiPostGeneric('validateUsers', { token });
        // console.log(response);
        setisLogged(false);
        setuserName(name);
        if (!response) {
          history.push('/login');
        }
      }
    };
    validateUsers();
  }, [setisLogged, history, isLogged, email, password, nome]);
  return (
    <div>
      <NavBarAdmin nome={ userName } />
      <h3>Cadastrar novo usuário</h3>
      {
        isLoading
          ? <h1>is loading..</h1>
          : <div>
            <form className="RegisterFormComponent">
              <label htmlFor="name-input">
                name
                <input
                  type="text"
                  id="name-input"
                  data-testid="admin_manage__input-name"
                  value={ nome }
                  onChange={ (e) => setnome(e.target.value) }
                />
              </label>
              <label htmlFor="email-input">
                email
                <input
                  type="email"
                  id="email-input"
                  data-testid="admin_manage__input-email"
                  value={ email }
                  onChange={ (e) => setemail(e.target.value) }
                />
              </label>
              <label htmlFor="pssword-input">
                senha
                <input
                  id="pssword-input"
                  type="password"
                  data-testid="admin_manage__input-password"
                  value={ password }
                  onChange={ (e) => setpassword(e.target.value) }
                />
              </label>
              <select
                data-testid="admin_manage__select-role"
                value={ selectedOption }
                onChange={ handleChange }
              >
                <option value="opcao1">Vendedor</option>
                <option value="opcao2">Opção 2</option>
                <option value="opcao3">Opção 3</option>
              </select>
              <br />
              <br />
              <button
                type="button"
                data-testid="admin_manage__button-register"
                onClick={ () => register() }
                disabled={ enableButton }
              >
                Cadastrar
              </button>
            </form>
          </div>
      }
    </div>
  );
}
