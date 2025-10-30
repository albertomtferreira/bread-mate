import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import './order_homepage.style.css';

export default function OrderHomepage() {
  const featuredProducts = products.slice(0, 2);

  return (
    <div className="my-5">
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold">Featured Products</h2>
        <p className="lead text-muted">Discover our most popular breadsticks</p>
      </div>

      <div className="row g-4 mb-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="col-md-6">
            <div className="card h-100 shadow-sm featured-card">
              <img
                className="card-img-top featured-product-image"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="text-muted small">{product.packSize}</p>
                <p className="card-text flex-grow-1">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="h4 mb-0 text-primary">£{product.price.toFixed(2)}</span>
                  <Link to="/order" className="btn btn-primary custom-btn">
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link to="/order" className="btn btn-lg btn-primary custom-btn px-5 py-3">
          View All Products
        </Link>
      </div>
    </div>
  );
}
