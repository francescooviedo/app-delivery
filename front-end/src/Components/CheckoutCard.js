import PropTypes from 'prop-types';

export default function CheckoutCard({
  testidIndex,
  testidName,
  testidQuantity,
  testidUnitPrice,
  testidUSubPrice,
  testidRemButton,
  quantity,
  price,
  onClick,
  name,
  index,
  id,
}) {
  return (
    <tr key={ id }>
      <th
        data-testid={ testidIndex }
      >
        {index + 1}
      </th>
      <th
        data-testid={ testidName }
      >
        {name}
      </th>
      <th
        data-testid={ testidQuantity }
      >
        {quantity}
      </th>
      <th
        data-testid={ testidUnitPrice }
      >
        {price.toString().replace('.', ',')}
      </th>
      <th
        data-testid={ testidUSubPrice }
      >
        {`${(price * quantity).toFixed(2)
          .toString().replace('.', ',')}`}
      </th>
      <th>
        <button
          type="button"
          data-testid={ testidRemButton }
          onClick={ onClick }
        >
          Remover item
        </button>
      </th>
    </tr>
  );
}
CheckoutCard.propTypes = {
  testidIndex: PropTypes.string.isRequired,
  testidName: PropTypes.string.isRequired,
  testidQuantity: PropTypes.string.isRequired,
  testidUnitPrice: PropTypes.string.isRequired,
  testidUSubPrice: PropTypes.string.isRequired,
  testidRemButton: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
