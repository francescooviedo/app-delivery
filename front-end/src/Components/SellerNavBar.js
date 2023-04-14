import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function SellerNavBar({ nome }) {
  const history = useHistory();

  const redirect = (event) => {
    switch (event.target.name) {
    case 'orders':
      history.push('/seller/orders');
      break;
    case 'logout':
      history.push('/login');
      localStorage.clear();
      break;
    default:
      localStorage.clear();
      history.push('/');
    }
  };

  return (
    <div
      className={ `flex flex-row border-2  m-2 shadow bg-eastern-blue-800
    rounded border-eastern-blue-900 bg-eastern-blue p-3` }
    >
      <div>

        <button
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ (e) => redirect(e) }
          type="button"
          name="orders"
          className={ `bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 
          font-bold
            py-2 px-4 rounded focus:outline-none
             focus:shadow-outline text-eastern-blue-50 flex-1
             flex flex-col justify-center flex-1 mx-2
             ` }
        >
          pedidos
        </button>
      </div>
      <div>
        <h4
          data-testid="customer_products__element-navbar-user-full-name"
          className={ `bg-eastern-blue-500 text-eastern-blue-50 font-bold
          py-2 px-4 rounded focus:outline-none
           focus:shadow-outline text-eastern-blue-50
           flex flex-col justify-center flex-3 mx-2` }
        >
          {nome}

        </h4>
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          name="logout"
          onClick={ (e) => redirect(e) }
          className={ `justify-self-end
          bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 
          font-bold 
            py-2 px-4 rounded focus:outline-none  
             focus:shadow-outline text-eastern-blue-50
             mx-2` }
        >
          sair
        </button>
      </div>
    </div>
  );
}

SellerNavBar.propTypes = {
  nome: PropTypes.string.isRequired,
};
