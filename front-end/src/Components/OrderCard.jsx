function OrderCard() {
  return (
    <section>
      <div>
        <span data-testid="seller_orders__element-delivery-status-<id>">
          Pendente

        </span>
        <span data-testid="seller_orders__element-order-date-<id>">
          31/03/2023

        </span>
        <span data-testid="seller_orders__element-card-price-<id>">
          R$ 3,99

        </span>
        <span data-testid="seller_orders__element-card-address-<id>">
          Rua Juca Azevedo

        </span>
        <span
          data-testid="seller_orders__element-order-id-<id>"
        >
          0001

        </span>
      </div>
    </section>

  );
}
export default OrderCard;
