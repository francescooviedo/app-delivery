import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';
import apiCallGeneric from '../Helpers/apiGeneric';
import apiPostGeneric from '../Helpers/apiPostGeneric';

export default function Table({ totalPrice }) {
  const history = useHistory();
  const [endereco, setEndereco] = useState('');
  const [endNumber, setEndNumber] = useState('');
  const [seller, setSeller] = useState([]);
  const DATA_TESTID = 'customer_checkout__element-order-table-';
  const [selectedSeller, setSelectedSeller] = useState('');
  const { cart, setCart } = useContext(MyContext);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(items);
    const sellersSelect = async () => {
      const response = await apiCallGeneric('sellers');
      setSeller(response);
    };
    sellersSelect();
    setCart(items);
    console.log(seller);
  }, [setSeller]);

  const removeItem = (id) => {
    const item = cart.filter((i) => +i.id !== +id);
    setCart(item);
  };
  const handleChange = (sellerID) => {
    setSelectedSeller(sellerID);
  };
  const checkout = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const corpoDaReq = {
      sellerId: selectedSeller,
      totalPrice,
      deliveryAddress: endereco,
      deliveryNumber: endNumber,
      status: 'pendente',
      products: cart,
    };
    const id = await apiPostGeneric('sales', corpoDaReq, token);
    history.push(`/customer/order/${id}`);
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
            onChange={ (e) => handleChange(e.target.value) }
          >
            <option value="default">default</option>
            { seller.map((sellerName) => (
              <option
                key={ sellerName.id }
                value={ sellerName.id }

              >
                {sellerName.name}

              </option>
            )) }
          </select>
        </label>
        <span>Endereço</span>
        <input
          type="text"
          id="address"
          data-testid="customer_checkout__input-address"
          value={ endereco }
          onChange={ (e) => setEndereco(e.target.value) }
        />
        <span>Número</span>
        <input
          type="text"
          id="number"
          name="number"
          data-testid="customer_checkout__input-address-number"
          value={ endNumber }
          onChange={ (e) => setEndNumber(e.target.value) }
        />
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ () => checkout() }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </>
  );
}

Table.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};
