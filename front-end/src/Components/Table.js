import React, { useEffect, useContext } from 'react';
import MyContext from '../Context/MyContext';

function Table() {
  const DATA_TESTID = 'customer_checkout__element-order-table-';

  const { cart, setCart } = useContext(MyContext);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];

    setCart(items);
  }, []);

  const removeItem = (id) => {
    const item = cart.filter((i) => +i.id !== +id);
    setCart(item);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((products, index) => (
              <tr key={ products.id }>
                <th
                  data-testid={ `${DATA_TESTID}item-number-${index}` }
                >
                  {index + 1}
                </th>
                <th
                  data-testid={ `${DATA_TESTID}name-${index}` }
                >
                  {products.name}
                </th>
                <th
                  data-testid={ `${DATA_TESTID}quantity-${index}` }
                >
                  {products.quantity}
                </th>
                <th
                  data-testid={ `${DATA_TESTID}unit-price-${index}` }
                >
                  {`${products.price.toString().replace('.', ',')}`}
                </th>
                <th
                  data-testid={ `${DATA_TESTID}sub-total-${index}` }
                >
                  {`${(products.price * products.quantity).toFixed(2)
                    .toString().replace('.', ',')}`}
                </th>
                <th>
                  <button
                    type="button"
                    data-testid={ `${DATA_TESTID}remove-${index}` }
                    onClick={ () => removeItem(products.id) }
                  >
                    Remover item
                  </button>
                </th>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div>
        <h2>Detalhes e endereço para a entrega</h2>
        <label htmlFor="seller">
          <span>P. Vendedor responsável:</span>
          <select
            id="seller"
            name="seller"
            data-testid="customer_checkout__select-seller"
          >
            <option>Pessoa</option>
          </select>
        </label>
        <span>Endereço</span>
        <input
          type="text"
          id="address"
          data-testid="customer_checkout__input-address"
        />
        <span>Número</span>
        <input
          type="text"
          id="number"
          data-testid="customer_checkout__input-address-number"
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

export default Table;
