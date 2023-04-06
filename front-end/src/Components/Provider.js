import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';

function Provider({ children }) {
  useEffect(() => {});

  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  const contextValue = useMemo(() => ({
    totalPrice,
    setTotalPrice,
    cart,
    setCart,
  }), [totalPrice, cart]);

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
