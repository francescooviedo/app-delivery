import PropTypes from 'prop-types';
import '../provisoria/products.css';

export default function NavBar({ nome, checkoutValue }) {
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
        >
          sair
        </button>
        <h4>{`total: ${Math.round(checkoutValue * 100) / 100}`}</h4>
      </div>
    </div>
  );
}

NavBar.propTypes = {
  nome: PropTypes.string.isRequired,
  checkoutValue: PropTypes.number.isRequired,
};
