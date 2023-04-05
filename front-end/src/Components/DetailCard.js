import PropTypes from 'prop-types';

export default function DetailCard({
  index,
  nome,
  unitValue,
  quantity,
  subtotal,
}) {
  return (
    <div
      className="productCard"
    >
      <h1>{nome}</h1>
      <h4>{index}</h4>
      <h4>{nome}</h4>
      <h4>{quantity}</h4>
      <h4>{unitValue}</h4>
      <h4>{subtotal}</h4>
    </div>
  );
}
DetailCard.propTypes = {
  index: PropTypes.number.isRequired,
  nome: PropTypes.string.isRequired,
  unitValue: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  subtotal: PropTypes.string.isRequired,
};
