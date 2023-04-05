// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

export default function DetailBar() {
  return (
    <div className="navBarContainer">

      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        id

      </span>
      {' '}
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        seller name

      </span>
      {' '}
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        data

      </span>
      {' '}
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status
        "
      >
        status

      </span>
      {' '}
      <button
        type="button"
      >
        <span
          data-testid="customer_order_details__button-delivery-check"
        >
          marcar como entregue

        </span>
      </button>

    </div>
  );
}

// DetailBar.propTypes = {};
