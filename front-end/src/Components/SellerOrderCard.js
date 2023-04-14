import PropTypes from 'prop-types';

export default function SellerOrderCard({
  id, status, data, totalValue, address, onClick }) {
  return (
    <div
      role="presentation"
      className={ `flex flex-col border-2 
      border-eastern-blue-900 p-3 m-3 rounded bg-eastern-blue-800` }
      onClick={ onClick }
      onKeyDown={ onClick }
    >
      <p
        className={ `
      bg-eastern-blue-800 text-eastern-blue-50 text-center text-2xl p-2 font-bold
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      text-eastern-blue-50 mx-2` }
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        {id}
      </p>
      <p
        className={ `
      bg-eastern-blue-800 text-eastern-blue-50 text-center
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      text-eastern-blue-50 mx-2` }
        data-testid={ `seller_orders__element-delivery-status-${id}` }
      >
        {status}

      </p>
      <p
        className={ `
      bg-eastern-blue-800 text-eastern-blue-50 text-center
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      text-eastern-blue-50 mx-2` }
        data-testid={ `seller_orders__element-order-date-${id}` }
      >
        {(new Date(data)).toLocaleDateString('pt-br')}

      </p>
      <p
        className={ `
      bg-eastern-blue-800 text-eastern-blue-50 text-center
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      text-eastern-blue-50 mx-2` }
        data-testid={ `seller_orders__element-card-price-${id}` }
      >
        {totalValue.replace('.', ',')}

      </p>
      <p
        className={ `
      bg-eastern-blue-800 text-eastern-blue-50 text-center
      font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
      text-eastern-blue-50 mx-2` }
        data-testid={ `seller_orders__element-card-address-${id}` }
      >
        {address}

      </p>
    </div>
  );
}
SellerOrderCard.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  totalValue: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
