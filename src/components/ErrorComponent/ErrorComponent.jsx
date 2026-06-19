import Button from '../Button/Button';
import './ErrorComponent.css';

const ErrorComponent = ({ message = 'Something went wrong. Please try again.', onRetry }) => {
  return (
    <div className="error-box-container" id="error-message">
      <div className="error-box-icon-container">
        <svg
          className="error-box-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h3 className="error-box-title">System Error</h3>
      <p className="error-box-text">{message}</p>
      {onRetry && (
        <Button variant="outline" onClick={onRetry} id="retry-btn" className="error-retry-button">
          Try Again
        </Button>
      )}
    </div>
  );
};

export default ErrorComponent;
