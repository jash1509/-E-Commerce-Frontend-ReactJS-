import { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { getProductImage } from '../../utils/imageMapper';
import { fetchAllProducts } from '../../api/productApi';
import './Navbar.css';

const Navbar = () => {
  const { totalItems } = useCart();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    fetchAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Failed to load search suggestions', err));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (val) => {
    if (location.pathname !== '/') {
      navigate(`/?search=${encodeURIComponent(val)}`);
    } else {
      if (val) {
        setSearchParams({ search: val });
      } else {
        setSearchParams({});
      }
    }
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (product) => {
    setShowSuggestions(false);
    navigate(`/product/${product.id}`);
  };

  const suggestions = searchQuery.trim() === ''
    ? []
    : products
        .filter((p) => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, 6);

  return (
    <nav className="navbar" id="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" id="nav-home">
          STORE
        </Link>

        {/* Global Search Bar */}
        <div className="nav-search-container" ref={searchRef}>
          <div className="nav-search-input-wrapper">
            <svg
              className="nav-search-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="nav-search-input"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              id="navbar-search-input"
            />
            {searchQuery && (
              <button
                className="nav-search-clear-btn"
                onClick={() => {
                  if (location.pathname !== '/') {
                    navigate('/');
                  } else {
                    setSearchParams({});
                  }
                  setShowSuggestions(false);
                }}
                id="navbar-search-clear-btn"
                aria-label="Clear search"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}
          </div>

          {showSuggestions && suggestions.length > 0 && (
            <ul className="nav-search-suggestions" id="navbar-search-suggestions">
              {suggestions.map((p) => (
                <li
                  key={p.id}
                  className="nav-suggestion-item"
                  onClick={() => handleSuggestionClick(p)}
                >
                  <div className="nav-suggestion-img-wrapper">
                    <img src={getProductImage(p)} alt={p.title} className="nav-suggestion-img" />
                  </div>
                  <div className="nav-suggestion-info">
                    <span className="nav-suggestion-title">{p.title}</span>
                    <span className="nav-suggestion-category">{p.category}</span>
                  </div>
                  <span className="nav-suggestion-price">₹{p.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link to="/cart" className="navbar-cart" id="nav-cart">
          <svg
            className="cart-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          {totalItems > 0 && (
            <span className="cart-badge" id="cart-badge">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
