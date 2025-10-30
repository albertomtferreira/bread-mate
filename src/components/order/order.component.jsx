import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useToast } from '../../context/ToastContext';
import { products } from '../../data/products';
import './order.style.css';

export default function Order() {
  const { cartItems, addToCart, updateQuantity, removeFromCart, getCartTotal, getCartCount } = useCart();
  const { showToast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleAddToCart = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`, 'success');
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Product Catalog Section */}
        <div className="col-lg-8 mb-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Our Products</h2>
            <div className="btn-group" role="group">
              <button
                type="button"
                className={`btn btn-outline-primary ${selectedCategory === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                All
              </button>
              <button
                type="button"
                className={`btn btn-outline-primary ${selectedCategory === 'savory' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('savory')}
              >
                Savory
              </button>
              <button
                type="button"
                className={`btn btn-outline-primary ${selectedCategory === 'sweet' ? 'active' : ''}`}
                onClick={() => setSelectedCategory('sweet')}
              >
                Sweet
              </button>
            </div>
          </div>

          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm product-card">
                  <img
                    src={product.image}
                    className="card-img-top product-image"
                    alt={product.name}
                    loading="lazy"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="text-muted small mb-2">{product.packSize}</p>
                    <p className="card-text flex-grow-1">{product.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-auto">
                      <span className="h5 mb-0 text-primary">£{product.price.toFixed(2)}</span>
                      <button
                        className="btn btn-primary custom-btn"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shopping Cart Section */}
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-cart">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Shopping Cart ({getCartCount()})</h4>
            </div>
            <div className="card-body">
              {cartItems.length === 0 ? (
                <div className="text-center py-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    className="bi bi-cart text-muted mb-3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                  <p className="text-muted">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="cart-items">
                    {cartItems.map((item) => (
                      <div key={item.id} className="cart-item mb-3 pb-3 border-bottom">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div className="flex-grow-1">
                            <h6 className="mb-1">{item.name}</h6>
                            <p className="text-muted small mb-2">£{item.price.toFixed(2)} each</p>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => removeFromCart(item.id)}
                            title="Remove from cart"
                          >
                            ×
                          </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group btn-group-sm" role="group">
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <button type="button" className="btn btn-outline-secondary" disabled>
                              {item.quantity}
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                          <strong>£{(item.price * item.quantity).toFixed(2)}</strong>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="cart-total mt-4 pt-3 border-top">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">Total:</h5>
                      <h4 className="mb-0 text-primary">£{getCartTotal().toFixed(2)}</h4>
                    </div>
                    <button className="btn btn-success btn-lg w-100 mb-2">
                      Proceed to Checkout
                    </button>
                    <p className="text-muted small text-center mb-0">
                      Delivery options available at checkout
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
