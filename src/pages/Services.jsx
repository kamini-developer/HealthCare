import React, { useState } from "react";
import {
  FaStethoscope,
  FaSyringe,
  FaUsers,
  FaHeart,
  FaUserMd,
  FaChild,
  FaBone,
  FaXRay,
  FaVial,
  FaMicroscope,
  FaBrain,
  FaClinicMedical,
  FaVideo,
} from "react-icons/fa";

function Services() {
  const [activeService, setActiveService] = useState("general"); // ✅ useState inside component

  return (
    <div className="services-container">

      {/* SIDEBAR */}
      <div className="services-sidebar">
        <h3>Service Categories</h3>
        <ul className="service-list">
          <li
            className={activeService === "general" ? "active" : ""}
            onClick={() => setActiveService("general")}
          >
            <FaUserMd className="li-icon" />
            <span>General Practice</span>
          </li>

          <li
            className={activeService === "specialist" ? "active" : ""}
            onClick={() => setActiveService("specialist")}
          >
            <FaHeart className="li-icon" />
            <span>Specialist Consultations</span>
          </li>

          <li
            className={activeService === "diagnostic" ? "active" : ""}
            onClick={() => setActiveService("diagnostic")}
          >
            <FaClinicMedical className="li-icon" />
            <span>Diagnostic Services</span>
          </li>

          <li
            className={activeService === "telehealth" ? "active" : ""}
            onClick={() => setActiveService("telehealth")}
          >
            <FaVideo className="li-icon" />
            <span>Telehealth</span>
          </li>
        </ul>

        <div className="emergency-box">
          <h4>Emergency?</h4>
          <p>If this is an emergency, do not book online.</p>
          <button>Call 911</button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="services-content">

        {/* GENERAL PRACTICE */}
        {activeService === "general" && (
          <>
            <h2>General Practice</h2>
            <p className="subtitle">
              Routine check-ups and primary care for your whole family.
            </p>

            <div className="card-grid">
              <div className="service-card">
                <FaStethoscope className="service-icon" />
                <h4>Annual Physicals</h4>
                <p>Comprehensive health assessments.</p>
              </div>

              <div className="service-card">
                <FaSyringe className="service-icon" />
                <h4>Vaccinations</h4>
                <p>Flu shots and routine vaccines.</p>
              </div>

              <div className="service-card">
                <FaUsers className="service-icon" />
                <h4>Family Medicine</h4>
                <p>Ongoing care for all ages.</p>
              </div>
            </div>
          </>
        )}

        {/* SPECIALIST */}
        {activeService === "specialist" && (
          <>
            <h2>Specialist Consultations</h2>
            <p className="subtitle">
              Expert care for specific medical conditions.
            </p>

            <div className="card-grid">
              <div className="service-card">
                <FaHeart className="service-icon" />
                <h4>Cardiology</h4>
                <p>Heart health screenings and cardiac care.</p>
              </div>

              <div className="service-card">
                <FaUserMd className="service-icon" />
                <h4>Dermatology</h4>
                <p>Skin treatments and cosmetic advice.</p>
              </div>

              <div className="service-card">
                <FaChild className="service-icon" />
                <h4>Pediatrics</h4>
                <p>Healthcare for infants and children.</p>
              </div>

              <div className="service-card">
                <FaBone className="service-icon" />
                <h4>Orthopedics</h4>
                <p>Bone, joint, and sports injury care.</p>
              </div>

              <div className="service-card">
                <FaBrain className="service-icon" />
                <h4>Neurology</h4>
                <p>Brain, spinal cord, and nerves.</p>
              </div>
            </div>
          </>
        )}

        {/* DIAGNOSTIC */}
        {activeService === "diagnostic" && (
          <>
            <h2>Diagnostic Services</h2>
            <p className="subtitle">
              State-of-the-art imaging and laboratory services.
            </p>

            <div className="card-grid">
              <div className="service-card">
                <FaXRay className="service-icon" />
                <h4>X-Ray & Imaging</h4>
                <p>Advanced MRI, CT scans, and digital X-rays.</p>
              </div>

              <div className="service-card">
                <FaVial className="service-icon" />
                <h4>Blood Tests</h4>
                <p>Complete blood counts and cholesterol checks.</p>
              </div>

              <div className="service-card">
                <FaMicroscope className="service-icon" />
                <h4>Pathology Lab</h4>
                <p>Accurate tissue analysis and biopsy results.</p>
              </div>
            </div>
          </>
        )}

        {/* TELEHEALTH */}
        {activeService === "telehealth" && (
          <>
            <h2>Telehealth</h2>
            <p className="subtitle">Online consultations with certified doctors.</p>

            <div className="card-grid">
              <div className="service-card">
                <FaVideo className="service-icon" />
                <h4>Video Consultation</h4>
                <p>Consult doctors from home.</p>
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Services;
