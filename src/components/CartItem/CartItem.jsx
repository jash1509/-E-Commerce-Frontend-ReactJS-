import { Link } from 'react-router-dom';
import { getProductImage } from '../../utils/imageMapper';
import './CartItem.css';

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  const mappedImage = getProductImage(item);

  return (
    <div className="cart-item-container" id={`cart-item-${item.id}`}>
      <div className="cart-item-img-container">
        <img src={mappedImage} alt={item.title} className="cart-item-image" />
      </div>

      <div className="cart-item-details">
        <Link to={`/product/${item.id}`} className="cart-item-name">
          {item.title}
        </Link>
        <p className="cart-item-price-unit">₹{item.price.toFixed(2)}</p>

        <div className="cart-item-control-row">
          <div className="cart-item-quantity-selector">
            <button
              className="cart-item-qty-btn"
              onClick={() => onDecrement(item.id)}
              id={`decrement-${item.id}`}
              disabled={item.quantity <= 1}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="cart-item-qty-value">{item.quantity}</span>
            <button
              className="cart-item-qty-btn"
              onClick={() => onIncrement(item.id)}
              id={`increment-${item.id}`}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            className="cart-item-delete-btn"
            onClick={() => onRemove(item.id)}
            id={`remove-${item.id}`}
          >
            Remove
          </button>
        </div>
      </div>

      <div className="cart-item-subtotal-column">
        <span className="cart-item-subtotal-price">
          ₹{(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
