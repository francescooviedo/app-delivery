import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ label, name, value, onChange, type, testid }) {
  return (
    <div>
      <label htmlFor={ name }>{label}</label>
      <input
        type={ type }
        name={ name }
        id={ name }
        value={ value }
        onChange={ onChange }
        data-testid={ testid }
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
