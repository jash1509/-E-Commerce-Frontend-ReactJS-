import './Button.css';

const Button = ({
  onClick,
  children,
  type = 'button',
  variant = 'primary',
  disabled = false,
  loading = false,
  className = '',
  id,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${loading ? 'btn-loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      id={id}
      {...props}
    >
      {loading ? (
        <span className="btn-spinner"></span>
      ) : (
        <span className="btn-content">{children}</span>
      )}
    </button>
  );
};

export default Button;
