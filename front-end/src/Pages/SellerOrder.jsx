import { useContext } from 'react';
import Header from '../Components/Header';
import OrderCard from '../Components/OrderCard';
import MyContext from '../Context/MyContext';

export default function SellerOrder() {
  // const [useLocalStorage, setLocalStorage] = useState({});

  // useEffect(() => {
  //   setLocalStorage(JSON.parse(localStorage.getItem('users')));
  // },[]);
  const { orders } = useContext(MyContext);
  return (
    <>
      <Header />
      {
        orders.map((order) => (
          <OrderCard
            key={ order.id }
            id={ order.id }
            status={ order.status }
            orderDate={ order.sale_date }
            deliveryAddress={ order.deliveryAddress }
            deliveryNumber={ order.deliveryNumber }
            totalPrice={ order.totalPrice }

          />

        ))
      }

    </>
  );
}
