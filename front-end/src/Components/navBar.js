import PropTypes from 'prop-types';
import '../provisoria/products.css';
import { useHistory } from 'react-router-dom';

export default function NavBar({ nome }) {
  const history = useHistory();

  const redirect = () => {
    localStorage.clear();
    history.push('/login');
  };

  return (
    <div className="navBarContainer">
      <div>

        <button
          data-testid="customer_products__element-navbar-link-products"
          type="button"
        >
          produtos
        </button>
      </div>
      <div>
        <button data-testid="customer_products__element-navbar-link-orders" type="button">
          meus produtos
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

NavBar.propTypes = {
  nome: PropTypes.string.isRequired,
};
