import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function SellerNavBar({ nome }) {
  const history = useHistory();

  const redirect = (event) => {
    switch (event.target.name) {
    case 'orders':
      history.push('/seller/orders');
      break;
    case 'logout':
      history.push('/login');
      localStorage.clear();
      break;
    default:
      localStorage.clear();
      history.push('/');
    }
  };

  return (
    <div className="navBarContainer">
      <div>

        <button
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ (e) => redirect(e) }
          type="button"
          name="orders"
        >
          pedidos
        </button>
      </div>
      <div>
        <h4
          data-testid="customer_products__element-navbar-user-full-name"
          className="nomeNavBar"
        >
          {nome}

        </h4>
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          name="logout"
          onClick={ (e) => redirect(e) }
        >
          sair
        </button>
      </div>
    </div>
  );
}

SellerNavBar.propTypes = {
  nome: PropTypes.string.isRequired,
};
