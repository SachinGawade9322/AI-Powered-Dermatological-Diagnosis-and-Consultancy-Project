import React from "react";
import { useParams } from "react-router-dom";
import tinImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Tinea corporis.jpg";
 

const Tinea = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Tinea",
    description: "Tinea, commonly known as ringworm, is a fungal infection that affects the skin, hair, and nails. It is characterized by red, itchy, and scaly patches on the skin. Tinea can occur in various forms depending on the affected area, such as tinea corporis (body), tinea pedis (athlete's foot), and tinea capitis (scalp).",
    remedies: [
      "Keep the affected area clean and dry.",
      "Use antifungal creams or powders as recommended by a healthcare professional.",
      "Avoid sharing personal items like towels and clothing to prevent spreading the infection.",
      "Wear breathable fabrics to reduce moisture buildup.",
      "Consult a doctor if the condition worsens or does not improve with over-the-counter treatments.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={tinImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Tinea;
