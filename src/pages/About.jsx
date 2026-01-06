import React, { useState } from "react";
import { FaHeart, FaShieldAlt, FaLightbulb } from "react-icons/fa";
import Images from "../utils/images";

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="about-container">

      {/* Top Section */}
      <div className="about-top">
        <img src={Images.AboutImage} alt="About Us" className="about-image" />
        <div className="about-text">
          <h1>Reimagining Healthcare, Together</h1>
          <p>
            We envision a world where quality healthcare is accessible to everyone, everywhere.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="about-values">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          <div className="value-card">
            <FaHeart className="value-icon" />
            <h4>Patient-Centricity</h4>
            <p>Patient always comes first.</p>
          </div>

          <div className="value-card">
            <FaShieldAlt className="value-icon" />
            <h4>Integrity</h4>
            <p>Transparent and ethical care.</p>
          </div>

          <div className="value-card">
            <FaLightbulb className="value-icon" />
            <h4>Innovation</h4>
            <p>Technology-driven healthcare.</p>
          </div>
        </div>
      </div>

      {/* HISTORY */}
      <div className="history-container">
        <h2>Our History</h2>

        {/* ALWAYS VISIBLE */}
        <p>
          The history of healthcare spans from ancient traditional practices to
          modern complex systems, marked by a progression from supernatural
          explanations of disease to scientifically-based interventions.
        </p>

        {/* CONDITIONAL CONTENT */}
        {showMore && (
          <p className="history-more">
            <strong>Ancient Medicine:</strong> Early civilizations like Egypt and
            India developed medical texts and surgical techniques.
            <br /><br />

            <strong>Middle Ages:</strong> Medical knowledge preserved in Islamic
            Golden Age and monasteries.
            <br /><br />

            <strong>19th Century:</strong> Germ theory by Pasteur and Koch.
            <br /><br />

            <strong>20th–21st Century:</strong> Vaccines, antibiotics, AI-driven
            healthcare innovations.
          </p>
        )}

        <button
          className="read-more"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
}

export default About;
