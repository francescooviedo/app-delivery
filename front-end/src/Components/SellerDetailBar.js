import PropTypes from 'prop-types';

export default function SellerDetailBar({
  id,
  data,
  status,
  updateStatus,
}) {
  return (
    <div className="navBarContainer">

      <span
        className={ `
        bg-eastern-blue-800 text-eastern-blue-50 
font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
 text-eastern-blue-50 mx-2` }
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {id}

      </span>

      <span
        className={ `
        bg-eastern-blue-800 text-eastern-blue-50 
font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
 text-eastern-blue-50 mx-2` }
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { (new Date(data)).toLocaleDateString('pt-br')}

      </span>
      <span
        className={ `
        bg-eastern-blue-800 text-eastern-blue-50 
font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
 text-eastern-blue-50 mx-2` }
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {status}

      </span>
      {' '}
      <button
        type="button"
        name="Preparando"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ updateStatus }
        disabled={ status !== 'Pendente' }
        className={ status !== 'Pendente'
          ? 'text-eastern-blue-200 bg-eastern-blue-700/50 rounded py-2 px-4 font-bold m-1'
          : `bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 font-bold
          py-2 px-4 rounded focus:outline-none m-1 
           focus:shadow-outline text-eastern-blue-50` }
      >
        preparar pedido
      </button>
      <button
        type="button"
        name="Em Trânsito"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ updateStatus }
        disabled={ status !== 'Preparando' }
        className={ status !== 'Preparando'
          ? 'text-eastern-blue-200 bg-eastern-blue-700/50 rounded py-2 px-4 font-bold m-1'
          : `bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 font-bold
          py-2 px-4 rounded focus:outline-none m-1 
           focus:shadow-outline text-eastern-blue-50` }

      >
        saiu para entrega
      </button>
    </div>
  );
}

SellerDetailBar.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  updateStatus: PropTypes.func.isRequired,
};
