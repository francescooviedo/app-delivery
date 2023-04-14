import PropTypes from 'prop-types';

export default function DetailCard({
  index,
  nome,
  unitValue,
  quantity,
  subtotal,
}) {
  return (
    <div
      className={ `flex flex-row justify-center
    bg-eastern-blue-900 text-eastern-blue-50 
    font-bold 
      p-1 rounded focus:outline-none m-2 
       focus:shadow-outline text-eastern-blue-50` }
    >
      <span
        className={ `justify-self-end
      bg-eastern-blue-700 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid={ `customer_order_details__element-order-table-item-number-${index}` }
      >
        {index + 1}

      </span>
      {' '}
      <span
        className={ `justify-self-end
      bg-eastern-blue-700 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid={ `customer_order_details__element-order-table-name-${index}` }
      >
        {nome}

      </span>
      {' '}
      <span
        className={ `justify-self-end
      bg-eastern-blue-700 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid={ `customer_order_details__element-order-table-quantity-${index}` }
      >
        {quantity}

      </span>
      {' '}
      <span
        className={ `justify-self-end
      bg-eastern-blue-700 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid={ `customer_order_details__element-order-table-sub-total-${index}` }
      >
        {unitValue}

      </span>
      {' '}
      <span
        className={ `justify-self-end
      bg-eastern-blue-700 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid={ `customer_order_details__element-order-total-price-${index}` }
      >
        {subtotal}

      </span>
    </div>
  );
}
DetailCard.propTypes = {
  index: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  unitValue: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.number.isRequired,
};
