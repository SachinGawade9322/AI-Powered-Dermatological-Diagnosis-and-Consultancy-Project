// import React from "react";
// import "./CardsGrid.css";

// import acneImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Acne.jpg";
// import actImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Actinic Keratosis.jpg";
// import eczImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Eczema.jpg";
// import scarsImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Scars.jpg";
// import pigImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Pigmentation.jpg";
// import melaImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Melanoma.jpg";
// import vitImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Vitiligo.jpg";
// import tinImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Tinea corporis.jpg";
// import posImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Psoriasis.jpg";

// const CardsGrid = () => {
//   const cardsData = [
//     { id: 1, name: "Acne", imgSrc: acneImage },
//     { id: 2, name: "Actinic Karatosis", imgSrc: actImage },
//     { id: 3, name: "Eczema", imgSrc: eczImage },
//     { id: 4, name: "Scars", imgSrc: scarsImage},
//     { id: 5, name: "Pigmentation", imgSrc: pigImage },
//     { id: 6, name: "Melanoma", imgSrc: melaImage },
//     { id: 7, name: "Vitiligo", imgSrc: vitImage },
//     { id: 8, name: "Tinea corporis", imgSrc: tinImage },
//     { id: 9, name: "Psoriasis", imgSrc: posImage },
//   ];

//   return (
//     <div className="cards-container">
//       {cardsData.map((card) => (
//         <div key={card.id} className="card">
//           <img src={card.imgSrc} alt={card.name} className="card-image" />
//           <p className="card-name">{card.name}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardsGrid;


import React from "react";
import "./CardsGrid.css";


import acneImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Acne.jpg";
import actImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Actinic Keratosis.jpg";
import eczImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Eczema.jpg";
import scarsImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Scars.jpg";
import pigImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Pigmentation.jpg";
import melaImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Melanoma.jpg";
import vitImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Vitiligo.jpg";
import tinImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Tinea corporis.jpg";
import posImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Disease/Psoriasis.jpg";

const CardsGrid = () => {
  const cardsData = [
    { id: 1, name: "Acne", imgSrc: acneImage, link: "acne" },
    { id: 2, name: "Actinic Keratosis", imgSrc: actImage, link: "karatosis" },
    { id: 3, name: "Eczema", imgSrc: eczImage, link: "eczema" },
    { id: 4, name: "Scars", imgSrc: scarsImage, link: "scars" },
    { id: 5, name: "Pigmentation", imgSrc: pigImage, link: "pigmentation" },
    { id: 6, name: "Melanoma", imgSrc: melaImage, link: "melanoma" },
    { id: 7, name: "Vitiligo", imgSrc: vitImage, link: "vitiligo" },
    { id: 8, name: "Tinea Corporis", imgSrc: tinImage, link: "tinea" },
    { id: 9, name: "Psoriasis", imgSrc: posImage, link: "psoriasis" },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div 
          key={card.id} 
          className="card" 
          onClick={() => window.open(card.link, "_blank")}
          style={{ cursor: "pointer" }}
        >
          <img src={card.imgSrc} alt={card.name} className="card-image" />
          <p className="card-name">{card.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;
