import React from "react";
import { useParams } from "react-router-dom";
import actImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Actinic Keratosis.jpg";
 

const Karatosis = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Karatosis",
    description: "Actinic Keratosis is a rough, scaly patch on the skin caused by years of sun exposure, and it can sometimes lead to skin cancer if untreated.",
    remedies: [
      "Use sunscreen with SPF 30 or higher to protect your skin from UV rays.",
      "Apply topical treatments like 5-fluorouracil or imiquimod as prescribed by a dermatologist.",
      "Consider cryotherapy (freezing) or photodynamic therapy for more severe cases.",
      "Regularly check your skin for new growths or changes in existing spots.",
      "Consult a dermatologist for personalized treatment options.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={actImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Karatosis;
