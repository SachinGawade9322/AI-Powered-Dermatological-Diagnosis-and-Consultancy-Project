import React from "react";
import { useParams } from "react-router-dom";
import melaImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Melanoma.jpg";


const Melanoma = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Melanoma",
    description: "Melanoma is a type of skin cancer that develops from the pigment-producing cells known as melanocytes. It is the most serious form of skin cancer and can spread to other parts of the body if not detected early.",
    remedies: [
      "Surgical excision of the melanoma and surrounding tissue.",
      "Immunotherapy to boost the body's immune response against cancer cells.",
      "Targeted therapy for specific genetic mutations in melanoma cells.",
      "Chemotherapy for advanced melanoma cases.",
      "Radiation therapy to target specific areas affected by melanoma.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={melaImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Melanoma;
