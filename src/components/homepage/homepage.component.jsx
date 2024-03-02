import { NavLink } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

import Animation from "../../assets/lotties/AnimationReact.json";
import About from "../about/about.component";
import Order from "../order/order.component";
import Contact from "../contact/contact.component";
import Footter from "../footer/footer.component";
import CarouselBanner from "../carousel/carousel.component";
import OrderHomepage from "../order_homepage/order_homepage.component";

export default function Homepage() {
  return (
    <>
      <section className="bg-light p-5 min-vh-100">
        <div className="container-fluid">
          <CarouselBanner />
          <OrderHomepage />
          <About />
          <Contact />
          <Footter />
        </div>
      </section>
    </>
  );
}
