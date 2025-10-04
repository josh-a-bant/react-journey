import dayjs from "dayjs";
import axios from "axios";
import { formatMoney } from "../../utils/money";
import { DeliveryOption } from "./DeliveryOption";

export function OrderSummary({ cart, deliveryOption, loadCart }) {
  return (
    <div className="order-summary">
      {deliveryOption.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOption.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );

          const deleteCartItem = async () => {
            await axios.delete(`/api/cart-items/${cartItem.productId}`);
            await loadCart();
          };

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D"
                )}
              </div>
              <div className="test">
                <div className="cart-item-details-grid">
                  <img className="product-image" src={cartItem.product.image} />

                  <div className="cart-item-details">
                    <div className="product-name">{cartItem.product.name}</div>
                    <div className="product-price">
                      {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity:{" "}
                        <span className="quantity-label">
                          {cartItem.quantity}
                        </span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span
                        className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                      >
                        Delete
                      </span>
                    </div>
                  </div>
                </div>

                <DeliveryOption
                  cartItem={cartItem}
                  deliveryOption={deliveryOption}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
