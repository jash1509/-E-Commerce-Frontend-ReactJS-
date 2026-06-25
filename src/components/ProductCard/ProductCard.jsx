import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductImage } from '../../utils/imageMapper';
import Button from '../Button/Button';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const mappedImage = getProductImage(product);

  return (
    <div className="product-card" id={`product-card-${product.id}`}>
      <Link to={`/product/${product.id}`} className="product-card-link">
        <div className="product-card-img-wrapper">
          <img
            src={mappedImage}
            alt={product.title}
            className="product-card-img"
            loading="lazy"
          />
        </div>
        <div className="product-card-info">
          <p className="product-card-category">{product.category}</p>
          <h3 className="product-card-title">{product.title}</h3>
          
          <div className="product-card-meta">
            <p className="product-card-price">₹{product.price.toFixed(2)}</p>
            {product.rating && (
              <div className="product-card-rating">
                <span className="rating-star-icon">★</span>
                <span>{product.rating.rate}</span>
              </div>
            )}
          </div>
        </div>
      </Link>
      <div className="product-card-action">
        <Button
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
          }}
          id={`add-to-cart-${product.id}`}
          className="product-card-btn"
        >
          Add to Cart
        </Button>
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product);
            navigate('/cart');
          }}
          id={`buy-now-${product.id}`}
          className="product-card-btn"
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

