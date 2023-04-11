import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, onClick, disabled, testid }) {
  return (
    <button
      type="button"
      className="button"
      data-testid={ testid }
      onClick={ onClick }
      disabled={ disabled }
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  testid: PropTypes.string.isRequired,
};

Button.defaultProps = {
  disabled: false,
};
