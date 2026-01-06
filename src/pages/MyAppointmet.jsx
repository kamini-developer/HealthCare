import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Images from "../utils/images";

function MyAppointment() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const doctor = state?.doctor;

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState(() => {
    const saved = localStorage.getItem("bookedSlots");
    return saved ? JSON.parse(saved) : {};
  });

  const [patient, setPatient] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
  });

  const [error, setError] = useState("");

  if (!doctor) {
    return <h2 style={{ textAlign: "center" }}>No Doctor Selected</h2>;
  }

  const timeSlots = ["09:00 AM", "09:30 AM", "10:00 AM", "11:00 AM"];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✅ Age validation but allow typing
    if (name === "age" && value !== "" && Number(value) < 1) {
      setError("⚠ Age cannot be less than 1");
    } else {
      setError("");
    }

    setPatient({ ...patient, [name]: value });
  };

  const handleConfirm = () => {
    if (
      !patient.name.trim() ||
      !patient.age ||
      !patient.gender ||
      !patient.phone.trim()
    ) {
      setError("⚠ Please fill all patient details");
      return;
    }

    if (Number(patient.age) < 1) {
      setError("⚠ Age cannot be less than 1");
      return;
    }

    if (!selectedDate || !selectedTime) {
      setError("⚠ Please select date and time");
      return;
    }

    const updatedSlots = {
      ...bookedSlots,
      [selectedDate]: [...(bookedSlots[selectedDate] || []), selectedTime],
    };

    setBookedSlots(updatedSlots);
    localStorage.setItem("bookedSlots", JSON.stringify(updatedSlots));

    const appointmentData = {
      doctor,
      patient,
      date: selectedDate,
      time: selectedTime,
    };

    localStorage.setItem("myAppointment", JSON.stringify(appointmentData));
    console.log("appointment data-->",appointmentData)

    alert("Appointment Booked Successfully ✅");
    navigate("/appointments");
  };

  return (
    <div className="appointment-page">
      <h2 className="page-title">Book an Appointment</h2>
      <p className="subtitle">Schedule a visit with {doctor.name}</p>

      <div className="appointment-container">
        {/* LEFT CARD */}
        <div className="doctor-info-card">
          <img src={Images[doctor.img]} alt={doctor.name} />
          <h3>{doctor.name}</h3>
          <p className="role">{doctor.specialty}</p>
          <p>⭐ {doctor.rating} ({doctor.reviews} reviews)</p>
          <p>{doctor.experience} years experience</p>
        </div>

        {/* RIGHT BOOKING */}
        <div className="booking-section">
          {/* DATE */}
          <div className="section">
            <h4>1. Select Date</h4>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setSelectedTime("");
              }}
            />
          </div>

          {/* TIME SLOTS */}
          {selectedDate && (
            <div className="section">
              <h4>2. Available Time Slots</h4>
              <div className="time-slots">
                {timeSlots
                  .filter((time) => !bookedSlots[selectedDate]?.includes(time))
                  .map((time) => (
                    <button
                      key={time}
                      className={selectedTime === time ? "time active" : "time"}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}

                {bookedSlots[selectedDate]?.length === timeSlots.length && (
                  <p className="error-text">No slots available</p>
                )}
              </div>
            </div>
          )}

          {/* PATIENT DETAILS - SHOW ALWAYS */}
          <div className="section">
            <h4>3. Patient Details</h4>
            <div className="patient-form">
              <input
                type="text"
                name="name"
                placeholder="Patient Name"
                value={patient.name}
                onChange={handleChange}
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={patient.age}
                onChange={handleChange}
                min="1"
              />
              <select
                name="gender"
                value={patient.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={patient.phone}
                onChange={handleChange}
              />
            </div>
            {error && <p className="error-text">{error}</p>}
          </div>

          {/* CONFIRM */}
          <button className="confirm-btn" onClick={handleConfirm}>
            Confirm Appointment
          </button>
        </div>
      </div>
    </div>
  );
}

export default MyAppointment;
