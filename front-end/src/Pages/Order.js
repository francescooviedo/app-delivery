import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestData } from '../Helpers/api';
import NavBar from '../Components/navBar';
import OrderCard from '../Components/OrderCard';

export default function Orders() {
  const [userName, setUserName] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState();
  const history = useHistory();
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
    const getSales = async () => {
      const response = await requestData('sales');
      const userOrders = response.filter((order) => (order.user.name === name));
      setOrders(userOrders);
      console.log(userOrders);
      setIsLoading(false);
    };
    getSales();
  }, []);
  const redirect = (id) => {
    history.push(`/customer/orders/${id}`);
  };
  if (isLoading) {
    return <h1>is Loading</h1>;
  }
  return (
    <div className="flex flex-col grid-rows-4 ">
      <NavBar nome={ userName } />
      <h1
        className="text-center text-eastern-blue-100 m-2 text-5xl p-2 font-bold"
      >
        Meus Pedidos
      </h1>
      <div className="auto-rows-auto">
        {
          orders.map((order, index) => (
            <OrderCard
              key={ index }
              id={ order.id }
              status={ order.status }
              data={ order.saleDate }
              totalValue={ order.totalPrice }
              address={ `${order.deliveryAddress}, ${order.deliveryNumber}` }
              onClick={ () => redirect(index + 1) }
            />
          ))
        }
      </div>
    </div>
  );
}
