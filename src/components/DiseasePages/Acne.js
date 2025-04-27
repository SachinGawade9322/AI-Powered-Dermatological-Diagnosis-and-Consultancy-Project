import React from "react";
import { useParams } from "react-router-dom";
import acneImage from "../../assets/images/Disease/Acne.jpg"; 

const Acne = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Acne",
    description: "Acne occurs when hair follicles become clogged with oil and dead skin cells, leading to pimples, blackheads, and whiteheads.",
    remedies: [
      "Wash your face twice daily with a gentle cleanser.",
      "Use oil-free skincare products.",
      "Apply benzoyl peroxide or salicylic acid.",
      "Drink plenty of water and maintain a healthy diet.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={acneImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Acne;
