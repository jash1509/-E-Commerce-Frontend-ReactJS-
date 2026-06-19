import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderSuccess.css';

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 4000); // Auto-redirect after 4 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="success-container" id="order-success-page">
      <div className="success-icon-wrapper">
        <svg
          className="success-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="success-glow"></span>
      </div>
      <h2 className="success-title">Order is successfully done</h2>
      <p className="success-subtitle">
        Thank you for your purchase! Your order has been processed. You will be redirected to the homepage in a few seconds.
      </p>
    </div>
  );
};

export default OrderSuccess;
