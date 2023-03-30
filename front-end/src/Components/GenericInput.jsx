import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericInput extends Component {
  render() {
    const { type, value, labelText, handleChange, dataTestId } = this.props;
    return (
      <label htmlFor={ type }>
        { labelText }
        <input
          type={ type }
          name={ type }
          value={ value }
          onChange={ handleChange }
          data-testid={ dataTestId }
        />
      </label>
    );
  }
}

GenericInput.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default GenericInput;
