import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Images from "../utils/images";



import { MdWork,
   MdStar,
    MdReviews, 
    MdEventAvailable, 
    MdCalendarMonth, 
    MdChat 
  } from "react-icons/md";

function DoctorProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor } = location.state || {};
  
  if (!doctor) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>No Doctor Data Found</h2>;
  }

  return (
    <div className="doctor-profile-page">
      <div className="doctor-card">
        {/* Profile Image */}
        <div className="profile-img-container">
          <img src={Images[doctor.img]} alt={doctor.name} />
          <div
            className={`status-dot ${doctor.available ? "online" : "offline"}`}
            title={doctor.available ? "Available" : "Not Available"}
          ></div>
        </div>

        {/* Doctor Info */}
        <h2 className="doctor-name">{doctor.name}</h2>
        <p className="doctor-specialty">{doctor.specialty}</p>

        {/* Stats */}
        <div className="doctor-stats">
          <div className="stat">
            <MdWork className="label-icon" />
            <span className="label">Experience:</span>
            <span className="value">{doctor.experience} years</span>
          </div>
          <div className="stat">
            <MdStar className="label-icon" style={{ color: "#facc15" }} />
            <span className="label">Rating:</span>
            <span className="value">⭐ {doctor.rating}</span>
          </div>
          <div className="stat">
            <MdReviews className="label-icon" />
            <span className="label">Reviews:</span>
            <span className="value">{doctor.reviews}</span>
          </div>
          <div className="stat">
            <MdEventAvailable className="label-icon" />
            <span className="label">Status:</span>
            <span className={`value ${doctor.available ? "online" : "offline"}`}>
              {doctor.available ? "Available" : "Not Available"}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="doctor-actions">
          <button className="book-btn" onClick={()=>{navigate(`/myappoinment/${doctor.id}`,{state:{doctor}})}}>
            <MdCalendarMonth />
            Book Appointment
          </button>
          <button className="message-btn">
            <MdChat />
            Message Doctor
          </button>
        </div>

        {/* About Section */}
        <div className="doctor-about">
          <h3>About {doctor.name}</h3>
          <p>{doctor.about || "No additional infmation available."}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
