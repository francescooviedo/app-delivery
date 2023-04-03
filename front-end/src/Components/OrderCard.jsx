import PropTypes from 'prop-types';

function OrderCard({
  id,
  status,
  orderDate,
  deliveryAddress,
  deliveryNumber,
  totalPrice,
}) {
  return (
    <section>
      <div>
        <span data-testid={ `seller_orders__element-delivery-status-${id}` }>
          {status}
        </span>
        <span data-testid={ `seller_orders__element-order-date-${id}` }>
          {orderDate}
        </span>
        <span data-testid={ `seller_orders__element-card-price-${id}` }>
          R$
          {' '}
          {totalPrice}
        </span>
        <span
          data-testid={ `seller_orders__element-card-address-${id}` }
        >
          {deliveryAddress}
          ,
          {' '}
          {deliveryNumber}
        </span>
        <span data-testid={ `seller_orders__element-order-id-${id}` }>
          {id}
        </span>
      </div>
    </section>
  );
}

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
};

export default OrderCard;
