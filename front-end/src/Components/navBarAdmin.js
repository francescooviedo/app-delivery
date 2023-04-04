import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function NavBarAdmin({ nome }) {
  const history = useHistory();

  const redirect = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div className="navBarContainer">
      <div>
        <button
          data-testid="customer_products__element-navbar-link-orders"
          type="button"
        >
          GERENCIAR USUÁRIOS
        </button>
      </div>
      <div>
        <h4 data-testid="customer_products__element-navbar-user-full-name">{nome}</h4>
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => redirect() }
        >
          sair
        </button>
      </div>
    </div>
  );
}

NavBarAdmin.propTypes = {
  nome: PropTypes.string.isRequired,
};
