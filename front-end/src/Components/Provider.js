import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';
import { requestData } from '../services/requests';

function Provider({ children }) {
  const [quantity, setQuantity] = useState(0);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchSales() {
      const { data } = await requestData('/sales');
      setOrders(data);
    }
    fetchSales();
  }, []);

  const contextValue = useMemo(() => ({
    quantity,
    setQuantity,
    orders,
  }), [quantity, orders]);

  return (
    <MyContext.Provider value={ contextValue }>
      {children}
    </MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
