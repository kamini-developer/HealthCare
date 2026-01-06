import React from "react";
import { useNavigate } from "react-router-dom";
import Images from "../utils/images";

function DoctorCard({ doctor }) {
  const navigate = useNavigate();

  const handleAppointment = () => {
    navigate(`/myappoinment/${doctor.id}`, {
      state: { doctor },
    });
  };

  const handleProfile = () => {
    navigate(`/doctor-profile/${doctor.id}`, {
      state: { doctor }, // 👈 doctor profile data
    });
  };

  return (
    <div className="doctor-card">
      {doctor.available && (
        <span className="availability">AVAILABLE</span>
      )}

      <img
        src={Images[doctor.img]}
        alt={doctor.name}
        className="doctor-img"
      />

      <div className="rating">
        ★ {doctor.rating} ({doctor.reviews})
      </div>

      <div className="specialty">{doctor.specialty}</div>
      <h3 className="doctor-name">{doctor.name}</h3>
      <p className="experience">{doctor.experience} years exp.</p>

      <div className="btn-row">
        <button className="book-btn1" onClick={handleProfile}>
          Profile
        </button>

        <button className="book-btn2" onClick={handleAppointment}>
          Appointment
        </button>
      </div>
    </div>
  );
}

export default DoctorCard;
