import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductById } from '../../api/productApi';
import { useCart } from '../../context/CartContext';
import { getProductImage } from '../../utils/imageMapper';
import Loader from '../../components/Loader/Loader';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import Button from '../../components/Button/Button';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);

  const loadProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchProductById(id);
      setProduct(res.data);
    } catch (err) {
      setError(err.message || 'Failed to load product.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={error} onRetry={loadProduct} />;
  if (!product) return <ErrorComponent message="Product not found." />;

  const mappedImage = getProductImage(product);

  return (
    <div className="product-details" id="product-details-page">
      <Link to="/" className="back-link" id="back-link">
        <span className="back-arrow">←</span> Back to Gallery
      </Link>

      <div className="details-grid">
        <div className="details-image-section">
          <div className="details-image-wrapper">
            <img
              src={mappedImage}
              alt={product.title}
              className="details-image"
            />
          </div>
        </div>

        <div className="details-info-section">
          <span className="details-category">{product.category}</span>
          <h1 className="details-title">{product.title}</h1>
          
          <div className="details-rating-row">
            <div className="details-rating">
              <span className="rating-stars">
                {'★'.repeat(Math.round(product.rating?.rate || 0))}
                {'☆'.repeat(5 - Math.round(product.rating?.rate || 0))}
              </span>
              <span className="rating-value">{product.rating?.rate || 0}</span>
            </div>
            <span className="rating-count">
              • {product.rating?.count || 0} customer reviews
            </span>
          </div>

          <p className="details-price">₹{product.price.toFixed(2)}</p>

          <div className="details-divider"></div>

          <div className="details-description-container">
            <h3 className="description-heading">Description</h3>
            <p className="details-description">{product.description}</p>
          </div>

          <div className="details-action-row">
            <Button
              className={`details-add-btn ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
              id="add-to-cart-btn"
              variant={added ? 'secondary' : 'primary'}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

