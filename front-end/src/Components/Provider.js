<<<<<<< HEAD
import React, { useMemo } from 'react';
=======
import React, { /* useEffect */ useMemo, useState } from 'react';
>>>>>>> 6e0f231ff48a4d52256e010c42ba850ade9370f3
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
