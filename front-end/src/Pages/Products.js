import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/navBar';
import ProductCard from '../Components/ProductCard';
import { requestData, setToken } from '../Helpers/api';

export default function Products() {
  const history = useHistory();

  const [isLoading, setisLoading] = useState(true);
  const [userName, setuserName] = useState('');
  const [products, setProducts] = useState([]);
  const [checkoutValue, setcheckoutValue] = useState(0);
  const [totalValue, setTotalValue] = useState();

  useEffect(() => {
    const getProducts = async () => {
      const { token, name } = JSON.parse(localStorage.getItem('user'));
      setToken(token);
      const response = (await requestData('/products'))
        .map((product) => ({ ...product, quantity: 0 }));
      if (response.token === null) {
        history.push('/login');
      }
      setuserName(name);
      setProducts(response);
      setisLoading(false);
    };
    getProducts();
  }, [history]);

  const calculateTotalPrice = (arrProducts) => arrProducts.reduce((total, product) => {
    if (product.quantity) {
      total += product.quantity * product.price;
      setTotalValue(total);
    }
    return total;
  }, 0);

  const sum = (i) => {
    const newProducts = [...products];
    const updatedProduct = { ...newProducts[i] };
    updatedProduct.quantity = Math.max(updatedProduct.quantity + 1, 0);
    newProducts[i] = updatedProduct;
    setProducts(newProducts);
    setcheckoutValue(calculateTotalPrice(newProducts));
  };

  const subtract = (i) => {
    const newProducts = [...products];
    const updatedProduct = { ...newProducts[i] };
    updatedProduct.quantity = Math.max(updatedProduct.quantity - 1, 0);
    newProducts[i] = updatedProduct;
    setProducts(newProducts);
    setcheckoutValue(calculateTotalPrice(newProducts));
  };

  const handleChange = (e, i) => {
    const newProducts = [...products];
    const updatedProduct = { ...newProducts[i] };
    updatedProduct.quantity = Math.max(Number(e.target.value), 0);
    newProducts[i] = updatedProduct;
    setProducts(newProducts);
    setcheckoutValue(calculateTotalPrice(newProducts));
  };

  const redirectCheckout = () => {
    const newCart = [...products];
    const filteredCart = newCart.filter((i) => i.quantity > 0);
    localStorage.setItem('cart', JSON.stringify(filteredCart));
    localStorage.setItem('totalPrice', JSON.stringify(totalValue));
    history.push('/customer/checkout');
  };
  return (
    <div className="bg-eastern-blue-800/50 rounded">
      <NavBar nome={ userName } />
      {isLoading
        ? <h1>is loading..</h1>
        : products.map((product, index) => (
          <ProductCard
            id={ product.id }
            key={ index }
            value={ products[index].quantity }
            name={ product.name }
            price={ product.price.toString().replace('.', ',') }
            url={ product.url_image }
            sum={ () => sum(index) }
            subtract={ () => subtract(index) }
            onChange={ (e) => handleChange(e, index) }
          />
        ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => redirectCheckout() }
        disabled={ checkoutValue === '0' || checkoutValue === 0 }
        className={ checkoutValue === 0
          ? 'text-eastern-blue-200 bg-eastern-blue-700/50 rounded py-2 px-4 font-bold m-1'
          : `bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 font-bold
          py-2 px-4 rounded focus:outline-none m-1 
           focus:shadow-outline text-eastern-blue-50` }
      >
        <div>
          Ver Carrinho: R$
          <span data-testid="customer_products__checkout-bottom-value">
            { checkoutValue.toFixed(2).replace('.', ',') }
          </span>
        </div>
      </button>
    </div>
  );
}
