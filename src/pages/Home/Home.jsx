import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchAllProducts, fetchCategories } from '../../api/productApi';
import ProductCard from '../../components/ProductCard/ProductCard';
import Loader from '../../components/Loader/Loader';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';
import './Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('search') || '';

  const loadData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [prodRes, catRes] = await Promise.all([
        fetchAllProducts(),
        fetchCategories(),
      ]);
      setProducts(prodRes.data);
      setCategories(catRes.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch products.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (loading) return <Loader />;
  if (error) return <ErrorComponent message={error} onRetry={loadData} />;

  return (
    <div className="home" id="home-page">
      <section className="home-header">
        <div className="home-header-left">
          <h1 className="home-title">Curated Collection</h1>
          <p className="home-description">Explore premium design, luxury jewelry, utility electronics, and modern apparel.</p>
        </div>
        <p className="home-subtitle">
          {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''}
        </p>
      </section>

      <div className="home-filters" id="category-filter">
        <button
          className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-results-container">
          <p className="no-results-text">No products found matching "{searchQuery}"</p>
        </div>
      ) : (
        <div className="product-grid" id="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
