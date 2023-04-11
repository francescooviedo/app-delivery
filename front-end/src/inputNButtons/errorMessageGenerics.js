import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMessage({ testid, message }) {
  return (
    <p data-testid={ testid }>
      { message }
    </p>
  );
}

ErrorMessage.propTypes = {
  testid: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,

};
