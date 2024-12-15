import React, { useState } from "react";
import "./chatbot.css";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = () => {
    if (userInput.trim() === "") return;

    setMessages([
      ...messages,
      { sender: "user", text: userInput },
      { sender: "bot", text: getBotResponse(userInput) },
    ]);
    setUserInput("");
  };

  const getBotResponse = (input) => {
    const responses = {
      hello: "Hi there! How can I help you?",
      bye: "Goodbye! Have a nice day!",
      help: "I'm here to help. What do you need?",
    };
    return responses[input.toLowerCase()] || "Sorry, I don't understand.";
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Chatbot</div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
