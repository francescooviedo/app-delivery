import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export default function DetailBar() {
  return (
    <div className="navBarContainer">
      <h1>detail bar</h1>
      <h4>id</h4>
      <h4>seller name</h4>
      <h4>data</h4>
      <h4>status</h4>
      <button
        type="button"
      >
        marcar como entreguer
      </button>

    </div>
  );
}

DetailBar.propTypes = {};
