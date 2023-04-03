import PropTypes from 'prop-types';
import '../provisoria/products.css';

export default function ProductCard({
  id, name, price, url, sum, subtract, onChange, value,
}) {
  return (
    <div
      data-testid={ `customer_products__element-card-price-${id}` }
      className="productCard"
    >
      <h4
        key={ Math.random() }
      >
        {name}
      </h4>
      <h4
        key={ Math.random() }
      >
        {price}

      </h4>
      <img
        key={ Math.random() }
        src={ url }
        alt="img"
        data-testid={ `${id}-card-img` }
      />
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          name="quantity"
          value={ value }
          onClick={ sum }
        >
          +
        </button>
        <input
          type="number"
          name="quantity"
          value={ value }
          onChange={ onChange }
        />
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          name="quantity"
          value={ value }
          onClick={ subtract }
        >
          -
        </button>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  sum: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
