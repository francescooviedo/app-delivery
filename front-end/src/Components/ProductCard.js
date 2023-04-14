import PropTypes from 'prop-types';

export default function ProductCard({
  id, name, price, url, sum, subtract, onChange, value,
}) {
  return (
    <div
      className={ `flex flex-row border-2 
                  justify-end m-2 shadow
                  rounded border-eastern-blue-900 bg-eastern-blue` }
    >
      <h4
        className="flex flex-col text-eastern-blue-50 justify-center flex-1 mx-2"
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}
      </h4>
      <h4
        className="flex flex-col text-eastern-blue-50 justify-center flex-2 mx-2"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {price}

      </h4>
      <div className=" flex flex-col justify-center">
        <img
          className="h-10 max-w-full rounded-full"
          src={ url }
          alt="img"
          data-testid={ `customer_products__img-card-bg-image-${id}` }
        />
      </div>
      <div className="flex flex-row mx-2 my-5 justify-end">
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          name="quantity"
          value={ value }
          onClick={ subtract }
          className="shadow
          appearance-none
          border
          border-eastern-blue-700
           text-eastern-blue-50
            rounded
             py-2 px-3
              mb-3
              leading-tight
              focus:outline-none
              focus:shadow-outline"
        >
          -
        </button>

        <input
          type="number"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          name="quantity"
          value={ value }
          onChange={ onChange }
          className="shadow
          appearance-none
          border
          bg-eastern-blue-500
          border-eastern-blue-700
           text-eastern-blue-50
            rounded
             py-2 px-3
              mb-3
              leading-tight
              focus:outline-none
              focus:shadow-outline"
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          name="quantity"
          value={ value }
          onClick={ sum }
          className="shadow
          appearance-none
          border
          border-eastern-blue-700
           text-eastern-blue-50
            rounded
             py-2 px-3
              mb-3
              leading-tight
              focus:outline-none
              focus:shadow-outline"
        >
          +
        </button>
      </div>
    </div>
  );
}
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  sum: PropTypes.func.isRequired,
  subtract: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};
