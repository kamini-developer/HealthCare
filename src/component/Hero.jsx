import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../utils/images";

function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/doctor"); // 👉 Find Doctor page route
  };

  return (
    <section className="hero">
      {/* Text section */}
      <div className="hero-text">
        <h1>Virtual HealthCare For You.</h1>
        <p>
          Browse top-rated doctors and book appointments in just a few clicks.
        </p>

        <button className="cta-btn" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>

      {/* Image section */}
      <div className="hero-image">
        <img src={Images.HeroImage} alt="Doctor" />
      </div>
    </section>
  );
}

export default Hero;
