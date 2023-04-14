import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ label, onClick, disabled, testid }) {
  return (
    <button
      type="button"
      data-testid={ testid }
      onClick={ onClick }
      disabled={ disabled }
      className={ disabled
        ? 'text-eastern-blue-200 bg-eastern-blue-700/50 rounded py-2 px-4 font-bold m-1'
        : `bg-eastern-blue-500 hover:bg-eastern-blue-400 text-eastern-blue-50 font-bold
        py-2 px-4 rounded focus:outline-none m-1 
         focus:shadow-outline text-eastern-blue-700` }
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
