import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../Components/navBar';
import ProductCard from '../Components/ProductCard';
import apiCallGeneric from '../Helpers/apiGeneric';
import apiPostGeneric from '../Helpers/apiPostGeneric';
import '../provisoria/products.css';

export default function Products() {
  const data = [
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
    {
      quantity: 0,
    },
  ];
  const [productsArr, setproductsArr] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isLogged, setisLogged] = useState(true);
  const [userName, setuserName] = useState('');
  const [state, setState] = useState(data);
  const [checkoutValue, setcheckoutValue] = useState(0);
  const history = useHistory();
  useEffect(() => {
    const products = async () => {
      const response = await apiCallGeneric('products');
      setproductsArr(response);
    };
    setisLoading(false);
    const validateUsers = async () => {
      if (JSON.parse(localStorage.getItem('user')) !== null) {
        const user = JSON.parse(localStorage.getItem('user'));
        const response = await apiPostGeneric('validateUsers', user);
        setisLogged(false);
        setuserName(user.name);
        if (!response) {
          history.push('/login');
        }
      }
    };
    products();
    validateUsers();
  }, [setisLogged, history, isLogged]);

  const sum = (e, i) => {
    const { value, name } = e.target;
    const newState = [...state];
    newState[i] = {
      ...newState[i],
      [name]: (Number(value) + 1),
    };
    setState(newState);
    let price = 0;
    newState.forEach((objectQty, index) => {
      price += objectQty.quantity * productsArr[index].price;
    });
    setcheckoutValue(price);
  };

  const subtract = (e, i) => {
    const { value, name } = e.target;
    const newState = [...state];
    newState[i] = {
      ...newState[i],
      [name]: (Number(value) - 1),
    };
    setState(newState);
    let price = 0;
    newState.forEach((objectQty, index) => {
      price += objectQty.quantity * productsArr[index].price;
    });
    setcheckoutValue(price);
  };

  const handleChange = (e, i) => {
    const { value, name } = e.target;
    const newState = [...state];
    newState[i] = {
      ...newState[i],
      [name]: Number(value),
    };
    setState(newState);
    let price = 0;
    newState.forEach((objectQty, index) => {
      price += objectQty.quantity * productsArr[index].price;
    });
    setcheckoutValue(price);
  };

  return (
    <div className="cardContainer">
      <NavBar nome={ userName } checkoutValue={ checkoutValue } />
      {isLoading
        ? <h1>is loading..</h1>
        : productsArr.map((product, index) => (

          <ProductCard
            id={ product.id }
            key={ Math.random() }
            value={ state[index].quantity }
            name={ product.name }
            price={ product.price }
            url={ product.urlImage }
            sum={ (e) => sum(e, index) }
            subtract={ (e) => subtract(e, index) }
            onChange={ (e) => handleChange(e, index) }
          />

        ))}
    </div>
  );
}
