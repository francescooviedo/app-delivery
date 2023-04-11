import PropTypes from 'prop-types';
import Input from '../inputNButtons/inputGenerics';

export default function CheckoutInfo({
  sellers,
  endereco,
  setEndereco,
  setEndNumber,
  endNumber,
  setSelectedSeller,

}) {
  return (
    <form>
      <select
        id="seller"
        name="seller"
        data-testid="customer_checkout__select-seller"
        onChange={ setSelectedSeller }
      >
        <option value="default">default</option>
        { sellers.map((sellerName) => (
          <option
            key={ sellerName.id }
            value={ sellerName.id }

          >
            {sellerName.name}

          </option>
        )) }
      </select>
      <Input
        label="Endereco"
        name="endereco"
        value={ endereco }
        onChange={ setEndereco }
        type="text"
        testid="customer_checkout__input-address"
      />
      <Input
        label="Numero"
        name="numero"
        value={ endNumber }
        onChange={ setEndNumber }
        type="number"
        testid="customer_checkout__input-address-number"
      />
    </form>
  );
}
CheckoutInfo.propTypes = {
  endereco: PropTypes.string.isRequired,
  setEndereco: PropTypes.func.isRequired,
  setEndNumber: PropTypes.func.isRequired,
  endNumber: PropTypes.string.isRequired,
  setSelectedSeller: PropTypes.func.isRequired,
  sellers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    nome: PropTypes.string.isRequired,
  })).isRequired,
};
