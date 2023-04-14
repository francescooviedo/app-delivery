import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

export default function DetailBar({
  id,
  sellerName,
  data,
  status,
  updateStatus,
}) {
  return (
    <div
      className={ `flex flex-row border-2 
    mx-2 my-2 shadow text-eastern-blue-50
   rounded border-eastern-blue-900 bg-eastern-blue justify-center` }
    >

      <span
        className={ `justify-self-end
      bg-eastern-blue-900 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {id}

      </span>
      {' '}
      <span
        className={ `justify-self-end
      bg-eastern-blue-900 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {sellerName}

      </span>
      {' '}
      <span
        className={ `justify-self-end
      bg-eastern-blue-900 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { (new Date(data)).toLocaleDateString('pt-br')}

      </span>
      {' '}
      <span
        className={ `justify-self-end
      bg-eastern-blue-900 text-eastern-blue-50 
      font-bold 
        py-2 px-4 rounded focus:outline-none m-2 
         focus:shadow-outline text-eastern-blue-50
         mx-2` }
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}

      </span>
      {' '}
      <button
        type="button"
        name="Entregue"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ status !== 'Em Trânsito' }
        onClick={ updateStatus }
        className={ status !== 'Em Trânsito'
          ? 'text-eastern-blue-200 bg-eastern-blue-700/50 rounded py-2 px-4 font-bold m-1'
          : `bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 font-bold
          py-2 px-4 rounded focus:outline-none m-1 
           focus:shadow-outline text-eastern-blue-50` }
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
  updateStatus: PropTypes.func.isRequired,
};
