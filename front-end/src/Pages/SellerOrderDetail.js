import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SellerDetailBar from '../Components/SellerDetailBar';
import { requestData, updateSaleStatus } from '../Helpers/api';
import SellerNavBar from '../Components/SellerNavBar';
import SellerDetailCard from '../Components/SellerDetailCard';

export default function SellerOrderDetail() {
  const params = useParams();
  const [products, setProductsct] = useState();
  const [sale, setSale] = useState();
  const [userName, setUserName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [statusUpdate, setStatusUpdate] = useState();
  useEffect(() => {
    const getProductsAndSales = async (id) => {
      const response = await requestData(`/sales/${id}`);
      console.log(response);
      setProductsct(response.products);
      setSale(response.sale);
      setStatusUpdate(response.sale.status);
      setUserName(response.sale.seller.name);
      setIsLoading(false);
    };
    getProductsAndSales(params.id);
  }, [params]);

  const update = async (statusValue) => {
    console.log(statusValue);
    await updateSaleStatus(
      `/sales/${params.id}`,
      {
        status: statusValue,
      },
    );
    setStatusUpdate(statusValue);
  };

  if (isLoading) { return (<h1>is loading..</h1>); }
  return (
    <div>
      <p />
      <SellerNavBar nome={ userName } />
      <SellerDetailBar
        id={ params.id }
        sellerName={ sale.seller.name }
        data={ sale.saleDate }
        status={ statusUpdate }
        updateStatus={ (e) => update(e.target.name) }

      />
      <h1>DETAILS</h1>
      {products.map((product, index) => (
        <SellerDetailCard
          key={ index }
          index={ index }
          nome={ product.Product.name }
          quantity={ product.quantity }
          unitValue={ product.Product.price }
          subtotal={ product.quantity * product.Product.price }
        />
      ))}
      <p />

      <p data-testid="seller_order_details__element-order-total-price">
        {sale.totalPrice.replace('.', ',')}
      </p>

    </div>
  );
}
