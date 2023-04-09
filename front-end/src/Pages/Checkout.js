import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../Components/navBar';
import Table from '../Components/Table';
import MyContext from '../Context/MyContext';

function Checkout() {
  const { totalPrice, setTotalPrice, cart, setCart } = useContext(MyContext);
  const [totalPriceNum, setTotalPriceNum] = useState();
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
    console.log(cart);
  }, [setCart]);

  useEffect(() => {
    const sumPrice = cart.reduce((acc, item) => {
      if (item.quantity) {
        acc += item.quantity * item.price;
      }
      return acc;
    }, 0);
    setTotalPriceNum(sumPrice);
    setTotalPrice(sumPrice.toFixed(2).replace('.', ','));
  }, [cart]);

  return (
    <>
      <NavBar />
      <div>
        <h2>Finalizar pedido</h2>
        <Table totalPrice={ totalPriceNum } />
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          { totalPrice }
        </span>
      </div>
    </>
  );
}

export default Checkout;
