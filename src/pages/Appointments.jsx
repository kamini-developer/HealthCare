import React from "react";
import Images from "../utils/images";


function Appointments() {
  const appointment = JSON.parse(localStorage.getItem("myAppointment"));

  if (!appointment || !appointment.doctor || !appointment.patient) {
    return <h2 className="no-data">No Appointment Found</h2>;
  }

  return (
    <div className="appointment-page">
      <h2 className="page-title">My Appointment</h2>
      <p className="page-subtitle">Manage your upcoming visit details</p>

      <div className="appointment-wrapper">
        {/* STATUS BAR */}
        <div className="status-bar confirmed">
          <span>● CONFIRMED</span>
          {/* <span className="ref-id">Ref: #APT-882910</span> */}
        </div>

        <div className="appointment-card">
          {/* LEFT – Doctor */}
          <div className="doctor-profile">
            <img
              src={appointment.doctor.images || Images.images}
              alt={appointment.doctor.name}
              className="doctor-img"
            />

            <h3>{appointment.doctor.name}</h3>
            <p className="specialty">{appointment.doctor.specialty}</p>
            <p className="rating">⭐ 4.9 (124 reviews)</p>

            <button className="btn outline">Message Doctor</button>
          </div>

          {/* RIGHT – Details */}
          <div className="appointment-details">
            <div className="info-grid">
              <div>
                <span className="label">DATE</span>
                <p>{appointment.date}</p>
              </div>

              <div>
                <span className="label">TIME</span>
                <p>{appointment.time}</p>
              </div>

              <div>
                <span className="label">PATIENT</span>
                <p>
                  {appointment.patient.name} <br />
                  {appointment.patient.age} Years •{" "}
                  {appointment.patient.gender}
                </p>
              </div>

              <div>
                <span className="label">PHONE</span>
                <p>{appointment.patient.phone}</p>
              </div>
            </div>

            <div className="action-row">
              <button className="btn primary">Reschedule</button>
              <button className="btn danger">Cancel</button>
              <button className="btn icon">📅</button>
            </div>
          </div>
        </div>

        <p className="help-text">
          Need help with this appointment?{" "}
          <span>Contact Support</span> or call us at +1 (800) 123-4567
        </p>
      </div>
    </div>
  );
}

export default Appointments;
