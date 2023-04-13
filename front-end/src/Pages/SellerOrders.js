import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestData } from '../Helpers/api';
import SellerNavBar from '../Components/SellerNavBar';
import SellerOrderCard from '../Components/SellerOrderCard';

// import '../Css/login.css';

export default function SellerOrders() {
  const [userName, setUserName] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState();
  const history = useHistory();
  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUserName(name);
    const getSales = async () => {
      const response = await requestData('sales');
      console.log(response);
      const userOrders = response.filter((order) => (order.seller.name === name));
      setOrders(userOrders);
      console.log(userOrders);
      setIsLoading(false);
    };
    getSales();
  }, []);
  const redirect = (id) => {
    history.push(`/seller/orders/${id}`);
  };
  if (isLoading) {
    return <h1>is Loading</h1>;
  }
  return (
    <div>
      <SellerNavBar nome={ userName } />
      <h1>SellerOrders</h1>
      {
        orders.map((order, index) => (
          <SellerOrderCard
            key={ index }
            id={ order.id }
            status={ order.status }
            data={ order.saleDate }
            totalValue={ order.totalPrice }
            address={ `${order.deliveryAddress}, ${order.deliveryNumber}` }
            onClick={ () => redirect(order.id) }
          />
        ))
      }
    </div>
  );
}
