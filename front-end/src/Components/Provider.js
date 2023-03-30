import React, { /* useEffect */ useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';

function Provider({ children }) {
  const [quantity, setQuantity] = useState(0);

  const contextValue = useMemo(() => ({
    quantity,
    setQuantity,
  }), [quantity]);

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
