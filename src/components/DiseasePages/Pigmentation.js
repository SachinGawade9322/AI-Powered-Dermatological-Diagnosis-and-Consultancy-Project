import React from "react";
import { useParams } from "react-router-dom";
import pigImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Pigmentation.jpg";



const Pigmentation = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Pigmentation",
    description: "Pigmentation refers to the coloring of the skin, hair, and eyes. It is caused by the presence of melanin, a pigment produced by specialized cells called melanocytes. Pigmentation can be influenced by various factors, including genetics, sun exposure, hormonal changes, and certain medical conditions. Common types of pigmentation disorders include hyperpigmentation (darkening of the skin) and hypopigmentation (lightening of the skin).",
    remedies: [
      "Use sunscreen daily to protect against UV rays.",
      "Consider topical treatments like hydroquinone or retinoids.",
      "Explore laser therapy options for targeted pigmentation removal.",
      "Maintain a healthy diet rich in antioxidants.",
      "Consult a dermatologist for personalized treatment plans.",
      "Avoid excessive sun exposure and tanning beds.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={pigImage} alt={diseaseInfo.name} className="disease-image" />
      <p>{diseaseInfo.description}</p>

      <h2>Remedies</h2>
      <ul>
        {diseaseInfo.remedies.map((remedy, index) => (
          <li key={index}>{remedy}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pigmentation;
