import React from "react";
import { useParams } from "react-router-dom";
import vitImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Vitiligo.jpg";


const Vitiligo = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Vitiligo",
    description: "Vitiligo is a skin condition characterized by patches of skin losing their pigment. It occurs when melanocytes, the cells responsible for",
    remedies: [
      "Topical corticosteroids: These can help restore skin color in some cases.",
      "Phototherapy: Controlled exposure to ultraviolet light can stimulate melanocyte activity.",
      "Skin camouflage – using makeup or dyes to cover white patches.",
      "Surgical options: In some cases, skin grafting or depigmentation may be considered.",
      "Dietary changes: Some people find that certain dietary adjustments can help manage their condition.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={vitImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Vitiligo;
