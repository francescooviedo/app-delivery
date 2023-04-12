import PropTypes from 'prop-types';

export default function OrderCard({
  id, status, data, totalValue, address, onClick }) {
  return (
    <div
      role="presentation"
      className="detailCard"
      onClick={ onClick }
      onKeyDown={ onClick }
    >
      <p
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        {id}
      </p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        {status}

      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        {(new Date(data)).toLocaleDateString('pt-br')}

      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${id}` }
      >
        {totalValue.replace('.', ',')}

      </p>
      <p
        data-testid={ `customer_orders__element-card-address-${id}` }
      >
        {address}

      </p>
    </div>
  );
}
OrderCard.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
