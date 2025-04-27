import React from "react";
import { useParams } from "react-router-dom";
import scarsImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Scars.jpg";
 

const Scars = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Scars",
    description: "Scars are marks left on the skin after a wound or injury has healed. They can be caused by various factors, including acne, surgery, or trauma. Scars can vary in appearance, color, and texture.",
    remedies: [
      "Topical treatments (e.g., silicone gel, vitamin E)",
      "Laser therapy",
      "Microneedling",
      "Chemical peels",
      "Dermal fillers",
      "Surgical revision (for severe scars)",
      "Sun protection to prevent discoloration",
      "Moisturizers to keep the skin hydrated",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={scarsImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Scars;
