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
    <tr
      key={ id }
      className={ `flex flex-row border-2 
     mx-2 my-2 shadow
    rounded border-eastern-blue-900 bg-eastern-blue justify-center` }
    >
      <th
        className={ `justify-self-end
      bg-eastern-blue-950 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline  text-eastern-blue-50
         mx-2` }
        data-testid={ testidIndex }
      >
        {index + 1}
      </th>
      <th
        className={ `justify-self-end
      bg-eastern-blue-900 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline  text-eastern-blue-50
         mx-2` }
        data-testid={ testidName }
      >
        {name}
      </th>
      <th
        className={ `justify-self-end
      bg-eastern-blue-800 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline  text-eastern-blue-50
         mx-2` }
        data-testid={ testidQuantity }
      >
        {quantity}
      </th>
      <th
        className={ `justify-self-end
      bg-eastern-blue-700 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline  text-eastern-blue-50
         mx-2` }
        data-testid={ testidUnitPrice }
      >
        {price.toString().replace('.', ',')}
      </th>
      <th
        className={ `justify-self-end
      bg-eastern-blue-600 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline  text-eastern-blue-50
         mx-2` }
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
          className={ `justify-self-end
          bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 
          font-bold 
            py-2 px-4 rounded focus:outline-none m-2 
             focus:shadow-outline  text-eastern-blue-50
             mx-2` }
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
