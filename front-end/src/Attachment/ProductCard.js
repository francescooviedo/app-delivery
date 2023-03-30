import React from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ id, name, price, urlImage }) {
  return (
    <section>
      <h3
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </h3>
      <img
        src={ urlImage }
        alt={ name }
        width="150px"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h4
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price}
      </h4>
      <button
        type="button"
        name="remove"
        onClick={ handleClick }
        data-testid={ `{customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <h4
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      >
        { quantity }
      </h4>
      <button
        type="button"
        name="add"
        onClick={ handleClick }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
