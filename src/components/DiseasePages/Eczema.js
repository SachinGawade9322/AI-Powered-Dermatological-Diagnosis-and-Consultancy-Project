import React from "react";
import { useParams } from "react-router-dom";
import eczImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Eczema.jpg";


const Eczema = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Eczema",
    description: "Eczema is a chronic skin condition characterized by inflamed, itchy, and red patches of skin. It can be triggered by various factors, including allergens, irritants, and stress.",
    remedies: [
      "Use a gentle, fragrance-free moisturizer to keep your skin hydrated.",
      "Avoid known triggers such as certain soaps, detergents, and fabrics.",
      "Apply topical corticosteroids as prescribed by a dermatologist to reduce inflammation.",
      "Consider antihistamines to relieve itching and discomfort.",
      "Wear loose-fitting clothing made of breathable fabrics like cotton.",
      "Consult a dermatologist for personalized treatment options.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={eczImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Eczema;
