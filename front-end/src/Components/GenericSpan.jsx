import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GenericSpan extends Component {
  render() {
    const { hidden, dataTestId, errorMessage } = this.props;
    return (
      <span
        hidden={ hidden }
        data-testid={ dataTestId }
      >
        {errorMessage}
      </span>
    );
  }
}

GenericSpan.propTypes = {
  hidden: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default GenericSpan;
