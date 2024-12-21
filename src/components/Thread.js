import React from "react";
import "../styles/Thread.css";

function Thread({ title, description }) {
  return (
    <div className="thread">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Thread;
