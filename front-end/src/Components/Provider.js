import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import MyContext from '../Context/MyContext';

function Provider({ children }) {
  useEffect(() => {}, []);

  const contextValue = useMemo(() => ({}), []);

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
