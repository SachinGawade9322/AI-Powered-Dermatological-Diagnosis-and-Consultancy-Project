import React from "react";
import { useParams } from "react-router-dom";
import posImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Psoriasis.jpg";


const Psoriasis = () => {
  const { disease } = useParams();
  const diseaseInfo = {
    name: "Psoriasis",
    description: "Psoriasis is a chronic autoimmune condition that causes rapid skin cell growth, leading to thick, red, scaly patches on the skin. It can affect any part of the body and is often associated with itching and discomfort. Psoriasis can also have a significant impact on a person's quality of life.",
    remedies: [
      "Topical treatments: Corticosteroids, vitamin D analogues, and retinoids can help reduce inflammation and slow down skin cell growth.",
      "Phototherapy: Controlled exposure to ultraviolet light can help improve symptoms.",
      "Systemic medications: In severe cases, oral or injected medications that affect the entire body may be prescribed.",
      "Lifestyle changes: Maintaining a healthy diet, managing stress, and avoiding triggers can help manage psoriasis flare-ups.",
      "Moisturizers: Regularly applying moisturizers can help keep the skin hydrated and reduce scaling.",
    ],
  };

  return (
    <div className="disease-container">
      <h1>{diseaseInfo.name}</h1>
      <img src={posImage} alt={diseaseInfo.name} className="disease-image" />
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

export default Psoriasis;
