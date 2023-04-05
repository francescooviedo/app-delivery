import React /* , { useContext } */ from 'react';
/* import { useHistory } from 'react-router-dom'; */
import NavBar from '../Components/navBar';
import Table from '../Components/Table';

function Checkout() {
  /* const history = useHistory(); */

  /* const { totalPrice, setTotalPrice, order, orderId, setOrderId } = useContext(MyContext); */

  return (
    <>
      <NavBar />
      <div>
        <h2>Finalizar pedido</h2>
        <Table />
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          Total Price
        </span>
      </div>
    </>
  );
}

export default Checkout;
