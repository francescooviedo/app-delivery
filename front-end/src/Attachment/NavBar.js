import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/customer/products">
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS
          </button>
        </Link>
        <Link to="/customer/orders">
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS
          </button>
        </Link>
        <p
          data-testid="customer_products__element-navbar-user-full-name"
        >
          Nome do usuário aqui
        </p>
        <Link to="/">
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
          >
            Sair
          </button>
        </Link>
        <Link to="/customer/checkout">
          <button
            type="button"
            data-testid="customer_products__button-cart"
          >
            Ver carrinho
          </button>
        </Link>
      </ul>
    </nav>
  );
}
