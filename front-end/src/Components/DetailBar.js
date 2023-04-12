import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

export default function DetailBar({
  id,
  sellerName,
  data,
  status,
}) {
  return (
    <div className="navBarContainer">

      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {id}

      </span>
      {' '}
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {sellerName}

      </span>
      {' '}
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { (new Date(data)).toLocaleDateString('pt-br')}

      </span>
      {' '}
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}

      </span>
      {' '}
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled
      >
        marcar como entregue
      </button>
    </div>
  );
}

DetailBar.propTypes = {
  id: PropTypes.string.isRequired,
  sellerName: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
