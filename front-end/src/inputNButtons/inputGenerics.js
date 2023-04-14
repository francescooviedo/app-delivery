import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ label, name, value, onChange, type, testid }) {
  return (
    <div>
      <label
        htmlFor={ name }
        className="block text-eastern-blue-50 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <input
        className="shadow
      appearance-none
      border
      border-eastern-blue-700
       text-eastern-blue-700
        rounded
         w-full
         py-2 px-3
          mb-3
          leading-tight
          focus:outline-none
          focus:shadow-outline"
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
