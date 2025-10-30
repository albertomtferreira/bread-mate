import './about.style.css';

export default function About() {
  return (
    <>
      <div className="container-fluid bg-light py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center mb-5">
              <h2 className="display-4 fw-bold mb-3">Why Choose Bread Mate?</h2>
              <div className="underline-accent mx-auto"></div>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">🥖</div>
                <h4 className="mb-3">Freshly Made</h4>
                <p className="text-muted">
                  Each breadstick is crafted with the finest ingredients and frozen
                  to preserve their unique freshness.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">🏠</div>
                <h4 className="mb-3">Home Delivery</h4>
                <p className="text-muted">
                  Delivered right to your doorstep, ready to bake or enjoy
                  immediately with our premium baked option.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center p-4 h-100">
                <div className="feature-icon mb-3">⭐</div>
                <h4 className="mb-3">Premium Quality</h4>
                <p className="text-muted">
                  Experience the symphony of textures from crispy exterior to
                  soft, airy interior with irresistible homemade flavors.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="about-text-card p-4 p-md-5">
                <h3 className="text-center mb-4">The Bread Mate Experience</h3>
                <p className="lead text-center mb-4">
                  Indulge in the tantalizing aroma of freshly baked breadsticks, crafted
                  with the finest ingredients and delivered right to your doorstep!
                </p>
                <p className="mb-4">
                  Each breadstick is meticulously shaped and then carefully frozen to
                  preserve their unique freshness. When you bake your breadsticks, you
                  will be greeted with the delightful scent of warm, finest goodness,
                  ready to transform into perfectly golden-brown masterpieces.
                </p>
                <div className="premium-option-card p-4 mt-4">
                  <h5 className="mb-3">
                    <span className="badge bg-primary me-2">Premium Option</span>
                    Baked to Perfection
                  </h5>
                  <p className="mb-2">
                    For those who demand the ultimate indulgence, we offer an exclusive
                    option: have your breadsticks baked to perfection before they arrive
                    at your door. This premium service comes with an additional charge of
                    <strong> £2.00 per pack</strong>, ensuring that your breadsticks are
                    at their absolute peak of freshness and flavor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
