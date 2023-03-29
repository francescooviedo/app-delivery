import React, { Component } from 'react';
/* import { useHistory } from 'react-router-dom'; */

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </li>
          <li
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </li>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            Nome do usuário aqui
          </li>
          <li
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </li>
        </ul>
      </nav>
    );
  }
}
