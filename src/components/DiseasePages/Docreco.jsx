import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Docreco() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const location = queryParams.get("location");

  // Hardcoded doctor data for demonstration
  const doctorData = {
    "New York": [
      { name: "Dr. Smith", specialty: "Cardiologist", experience: 15, rating: 4.7 },
      { name: "Dr. Johnson", specialty: "Dermatologist", experience: 10, rating: 4.5 },
    ],
    "Mumbai": [
      { name: "Dr. Patel", specialty: "Orthopedist", experience: 12, rating: 4.8 },
      { name: "Dr. Shah", specialty: "Neurologist", experience: 8, rating: 4.6 },
    ],
    "default": [
      { name: "Dr. Default A", specialty: "General Physician", experience: 5, rating: 4.0 },
      { name: "Dr. Default B", specialty: "Pediatrician", experience: 6, rating: 4.2 },
    ],
  };

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set doctors based on location
    const doctorsForLocation = doctorData[location] || doctorData["default"];
    setDoctors(doctorsForLocation);
    setLoading(false);
  }, [location]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-semibold">Loading doctor recommendations...</div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Doctors Recommended for <span className="text-blue-600">{location}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{doctor.name}</h2>
              <p className="text-gray-600 mb-1"><strong>Specialty:</strong> {doctor.specialty}</p>
              <p className="text-gray-600 mb-1"><strong>Experience:</strong> {doctor.experience} years</p>
              <p className="text-gray-600"><strong>Rating:</strong> ⭐ {doctor.rating}</p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 col-span-full">
            No doctors found for this location.
          </div>
        )}
      </div>
    </div>
  );
}

export default Docreco;
