import React from 'react';

function Table() {
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
      </table>
      <table>
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
          type="number"
          id="number"
          data-testid="customer_checkout__input-addressNumber"
        />
      </table>
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
