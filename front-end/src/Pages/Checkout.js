import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import NavBar from '../Components/navBar';
import CheckoutCard from '../Components/CheckoutCard';
import { requestData, requestPostData, setToken } from '../Helpers/api';
import CheckoutInfo from '../Components/CheckoutInfo';
import { Button } from '../inputNButtons';

const DATA_TESTID = 'customer_checkout__element-order-table-';
function Checkout() {
  const [totalPrice, setTotalPrice] = useState();
  const [cart, setCart] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState();
  const [sellers, setSellers] = useState();
  const [endereco, setEndereco] = useState('');
  const [endNumber, setEndNumber] = useState('');
  const [selectedSeller, setSelectedSeller] = useState('');
  const history = useHistory();

  useEffect(() => {
    const getAllSellers = async () => {
      const getSellers = await requestData('/sellers');
      setSellers(getSellers);
      setIsLoading(false);
    };
    const getValues = () => {
      const { name } = JSON.parse(localStorage.getItem('user'));
      setUserName(name);
      const products = JSON.parse(localStorage.getItem('cart'));
      const getTotalPrice = JSON.parse(localStorage.getItem('totalPrice'));
      setCart(products);
      setTotalPrice(getTotalPrice);
    };
    getValues();
    getAllSellers();
  }, []);

  const removeItem = (id, i) => {
    const newPrice = totalPrice - (cart[i].quantity * cart[i].price);
    setTotalPrice(newPrice);
    const newCart = cart.filter((product) => +product.id !== +id);
    setCart(newCart);
  };

  const checkout = async (event) => {
    event.preventDefault();

    try {
      const corpoDaReq = {
        sellerId: selectedSeller,
        totalPrice,
        deliveryAddress: endereco,
        deliveryNumber: endNumber,
        status: 'Pendente',
        products: cart,
      };
      const { token } = JSON.parse(localStorage.getItem('user'));

      setToken(token);
      const id = await requestPostData('/sales', corpoDaReq);
      history.push(`/customer/orders/${id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-eastern-blue-800/50 rounded mx-auto md:h-screen lg:py-0">
      <NavBar nome={ userName } />
      <h2
        className="text-center text-eastern-blue-100 m-2 text-6xl p-2 font-bold"
      >
        Finalizar pedido
      </h2>
      {isLoading
        ? <h1>is loading..</h1>
        : cart.map((product, index) => (
          <CheckoutCard
            key={ index }
            id={ product.id }
            index={ index }
            testidIndex={ `${DATA_TESTID}item-number-${index}` }
            testidName={ `${DATA_TESTID}name-${index}` }
            testidQuantity={ `${DATA_TESTID}quantity-${index}` }
            testidUnitPrice={ `${DATA_TESTID}unit-price-${index}` }
            testidUSubPrice={ `${DATA_TESTID}sub-total-${index}` }
            testidRemButton={ `${DATA_TESTID}remove-${index}` }
            name={ product.name }
            quantity={ product.quantity }
            price={ product.price }
            onClick={ () => removeItem(product.id, index) }
          />
        ))}
      <h1
        className="text-center text-eastern-blue-100 m-2 text-5xl p-2 font-bold"
      >
        Informações De Compra
      </h1>

      {isLoading ? <h1>is loading..</h1> : <CheckoutInfo
        sellers={ sellers }
        endereco={ endereco }
        endNumber={ endNumber }
        selectedSeller={ selectedSeller }
        setEndereco={ (e) => setEndereco(e.target.value) }
        setEndNumber={ (e) => setEndNumber(e.target.value) }
        setSelectedSeller={ (e) => setSelectedSeller(e.target.value) }
      />}
      <span
        className={ `justify-self-end
         bg-eastern-blue-800 hover:bg-eastern-blue-400 text-eastern-blue-50 
         font-bold 
           py-2 px-4 rounded focus:outline-none m-4 
            focus:shadow-outline  text-eastern-blue-50
            mx-2` }
        data-testid="customer_checkout__element-order-total-price"
      >
        { Number(totalPrice).toFixed(2).toString().replace('.', ',')
          .replace('-', '') }
      </span>
      <Button
        label="Checkout"
        onClick={ (event) => checkout(event) }
        disabled={ false }
        testid="customer_checkout__button-submit-order"
      />
    </div>
  );
}

export default Checkout;
