import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import DoctorPage from "./pages/Doctor";
import MyAppointment from "./pages/MyAppointmet";
import DoctorProfile from "./pages/DoctorProfile";
import Services from "./pages/Services";
import About from "./pages/About";
import Login from "./pages/Login";
import Appointments from "./pages/Appointments";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/myappoinment/:id" element={<MyAppointment />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor-profile/:id" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



