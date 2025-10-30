import { Link } from "react-router-dom";
import About from "../about/about.component";
import Contact from "../contact/contact.component";
import Footter from "../footer/footer.component";
import CarouselBanner from "../carousel/carousel.component";
import OrderHomepage from "../order_homepage/order_homepage.component";
import './homepage.style.css';

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section bg-light">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">
                Welcome to <span className="text-primary">Bread Mate</span>
              </h1>
              <p className="lead mb-4">
                Artisan breadsticks crafted with love and delivered fresh to your door.
                Experience the perfect blend of crispy texture and irresistible flavor.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <Link to="/order" className="btn btn-primary btn-lg custom-btn px-4 py-3">
                  Order Now
                </Link>
                <a href="#about" className="btn btn-outline-primary btn-lg px-4 py-3">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <CarouselBanner />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section py-5 bg-white">
        <div className="container">
          <OrderHomepage />
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <section className="contact-section py-5" id="contact">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Get in Touch</h2>
            <p className="lead text-muted">Have questions? We'd love to hear from you!</p>
          </div>
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <Footter />
    </>
  );
}
