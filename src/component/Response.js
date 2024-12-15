// src/Response.js

import React from 'react';
import './Chatbot.css'; // Import your CSS file here

// Create a functional component for the response messages
const Response = ({ message, type }) => {
  return (
    <div
      className={`message ${type === 'user' ? 'user-message' : 'bot-message'}`}
    >
      {message}
    </div>
  );
};

export default Response;
