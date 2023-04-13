import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';

export default function SellerDetailBar({
  id,
  data,
  status,
  updateStatus,
}) {
  return (
    <div className="navBarContainer">

      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        {id}

      </span>

      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { (new Date(data)).toLocaleDateString('pt-br')}

      </span>
      <span
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
      >
        preparar pedido
      </button>
      <button
        type="button"
        name="Em Trânsito"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ updateStatus }
        disabled={ status !== 'Preparando' }

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
