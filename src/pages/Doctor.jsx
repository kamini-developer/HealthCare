import React, { useState } from "react";
import DoctorsList from "../Utils/DoctorsList";
import DoctorCard from "../component/DoctorCard";

function DoctorPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredDoctors = DoctorsList.filter((doc) => {
    const matchesSearch = doc.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" || doc.specialty === filter;

    return matchesSearch && matchesFilter;
  });

  console.log("filtered doctor--->",filteredDoctors)

  return (
    <div className="doctor-page">
      <h1>Doctors</h1>

      {/* Search bar */}
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* 👇 SEARCH FEEDBACK */}
        {search && (
          <p className="searching-text">
            Searching for "<strong>{search}</strong>"
          </p>
        )}
      </div>

      {/* Filters */}
      <div className="filters">
        {[
          "All",
          "CARDIOLOGY",
          "PEDIATRICS",
          "DERMATOLOGY",
          "NEUROLOGY",
          "ORTHOPEDICS",
          "GENERAL",
        ].map((spec) => (
          <button
            key={spec}
            onClick={() => setFilter(spec)}
            className={filter === spec ? "active" : ""}
          >
            {spec}
          </button>
        ))}
      </div>

      {/* Doctor list */}
      <div className="doctor-list">
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))
        ) : (
          <p className="no-result">
            ❌ No doctors found for "{search}"
          </p>
        )}
      </div>
    </div>
  );
}

export default DoctorPage;
