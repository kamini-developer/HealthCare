import React from "react";
import Images from "../utils/images";

function Hero() {
  return (
    <section className="hero">
      {/* Text section */}
      <div className="hero-text">
        <h1>Virtual HealthCare For You.</h1>
        <p>Browse top-rated doctors and book appointments in just a few clicks.</p>
        {/* Optional: add a CTA button */}
        <button className="cta-btn">Get Started</button>
      </div>

      {/* Image section */}
      <div className="hero-image">
        <img src={Images.HeroImage} alt="Doctor" />
      </div>
    </section>
  );
}

export default Hero;
