import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/navBar';
import apiPostGeneric from '../Helpers/apiPostGeneric';
import apiCallGeneric from '../Helpers/apiGeneric';
import DetailCard from '../Components/DetailCard';
import DetailBar from '../Components/DetailBar';

export default function Order() {
  const [userName, setuserName] = useState('');
  const [productDetail, setproductDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalValueDetails, setTotalValueDetails] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const products = async () => {
      const response = await apiCallGeneric('products');
      const cart = JSON.parse(localStorage.getItem('cart'));
      const cart2 = cart[0];
      const arrDetails = [];
      let totalValue = 0;
      response.forEach((product, index) => {
        if (cart2[index].quantity !== 0) {
          totalValue += product.price * cart2[index].quantity;
          arrDetails.push({ product, quantity: cart2[index].quantity });
        }
      });
      setproductDetail(arrDetails);
      setIsLoading(false);
      setTotalValueDetails(totalValue);
    };

    const validateUsers = async () => {
      if (JSON.parse(localStorage.getItem('user')) !== null) {
        const { token, name } = JSON.parse(localStorage.getItem('user'));
        const response = await apiPostGeneric('validateUsers', { token });
        setuserName(name);
        if (!response) {
          history.push('/login');
        }
      }
    };
    validateUsers();
    products();
  }, [history]);

  return (
    <div>
      <NavBar nome={ userName } />
      <p />
      <DetailBar />
      <p />
      {isLoading
        ? <h1>is loading..</h1>
        : productDetail.map((product, index) => (
          <DetailCard
            key={ index }
            index={ index + 1 }
            nome={ product.product.name }
            unitValue={ product.product.price.toString().replace('.', ',') }
            quantity={ product.quantity }
            subtotal={
              (product.product.price * product.quantity)
                .toString().replace('.', ',')
            }
          />
        ))}
      <p />
      <div>
        Total: R$
        <span data-testid="customer_order_details__element-order-total-price">
          {totalValueDetails.toString().replace('.', ',')}
        </span>
      </div>
    </div>
  );
}
