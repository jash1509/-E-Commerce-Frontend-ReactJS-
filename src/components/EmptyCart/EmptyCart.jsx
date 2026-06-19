import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className="empty-cart-container" id="empty-cart">
      <div className="empty-cart-icon-wrapper">
        <svg
          className="empty-cart-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
        <span className="empty-cart-glow"></span>
      </div>
      <h2 className="empty-cart-title">Your Cart is Empty</h2>
      <p className="empty-cart-subtitle">
        Looks like you haven't added anything to your cart yet. Explore our curated collections to find premium items!
      </p>
      <Link to="/" className="empty-cart-link" id="continue-shopping">
        <Button variant="primary" className="empty-cart-btn">
          Explore Products
        </Button>
      </Link>
    </div>
  );
};

export default EmptyCart;
