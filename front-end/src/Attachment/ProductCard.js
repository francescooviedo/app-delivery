import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { id, urlImage, name, price } = this.props;

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
          data-testid={ `{customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
