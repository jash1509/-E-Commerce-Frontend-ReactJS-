import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/CartItem/CartItem';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import OrderSuccess from '../../components/OrderSuccess/OrderSuccess';
import Button from '../../components/Button/Button';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, increment, decrement, clearCart, totalPrice } =
    useCart();
  const navigate = useNavigate();
  const [isOrdered, setIsOrdered] = useState(false);

  const handleCheckout = () => {
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return <OrderSuccess />;
  }

  if (cart.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="cart" id="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">Shopping Cart</h1>
        <Button
          variant="outline"
          className="cart-clear-btn"
          onClick={clearCart}
          id="clear-cart"
        >
          Clear Cart
        </Button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrement={increment}
              onDecrement={decrement}
              onRemove={removeFromCart}
            />
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-card">
            <h2 className="summary-title">Summary</h2>
            
            <div className="summary-details">
              <div className="summary-row">
                <span>Subtotal</span>
                <span className="summary-value">₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="summary-value summary-free">Free</span>
              </div>
            </div>

            <div className="summary-divider"></div>
            
            <div className="summary-row summary-total">
              <span>Total</span>
              <span className="summary-total-price">₹{totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="checkout-action">
              <Button
                variant="primary"
                className="checkout-btn"
                id="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

