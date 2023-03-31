import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericButton extends Component {
  render() {
    const { type, value, disabled, dataTestId } = this.props;
    return (
      <input
        type={ type }
        value={ value }
        disabled={ disabled }
        data-testid={ dataTestId }
      />
    );
  }
}

GenericButton.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  dataTestId: PropTypes.string.isRequired,
};

GenericButton.defaultProps = {
  disabled: false,
};

export default GenericButton;
