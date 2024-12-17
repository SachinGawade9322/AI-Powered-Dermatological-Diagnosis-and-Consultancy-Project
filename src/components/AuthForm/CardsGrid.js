import React from "react";
import "./CardsGrid.css";

const CardsGrid = () => {
  const cardsData = [
    { id: 1, name: "John Doe", imgSrc: "https://via.placeholder.com/150" },
    { id: 2, name: "Jane Smith", imgSrc: "https://via.placeholder.com/150" },
    { id: 3, name: "Michael Johnson", imgSrc: "https://via.placeholder.com/150" },
    { id: 4, name: "Emily Davis", imgSrc: "https://via.placeholder.com/150" },
    { id: 5, name: "Chris Brown", imgSrc: "https://via.placeholder.com/150" },
    { id: 6, name: "Amanda Wilson", imgSrc: "https://via.placeholder.com/150" },
    { id: 7, name: "Jessica Martinez", imgSrc: "https://via.placeholder.com/150" },
    { id: 8, name: "David Lee", imgSrc: "https://via.placeholder.com/150" },
    { id: 9, name: "Sarah Taylor", imgSrc: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imgSrc} alt={card.name} className="card-image" />
          <p className="card-name">{card.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;
