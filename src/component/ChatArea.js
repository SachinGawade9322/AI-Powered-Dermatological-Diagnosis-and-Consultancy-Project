import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

function ChatArea({ selectedChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);  // To handle typing state
  const optionsMenuRef = useRef(null);
  const iconButtonRef = useRef(null);

  useEffect(() => {
    if (selectedChat) {
      setMessages([`Resuming: ${selectedChat}`]);
    }
  }, [selectedChat]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        optionsMenuRef.current &&
        !optionsMenuRef.current.contains(event.target) &&
        !iconButtonRef.current.contains(event.target)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "user", likes: 0, dislikes: 0 }]);
      setInput("");
      simulateBotResponse(input);
    }
  };

  const simulateBotResponse = (userInput) => {
    setIsTyping(true);  // Start typing animation for the bot

    let response = "";
    if (userInput.toLowerCase().includes("hi") || userInput.toLowerCase().includes("hello")) {
      response = getRandomGreeting();
    } else if (userInput.toLowerCase().includes("how are you")) {
      response = "I'm doing great! How about you?";
    } else if (userInput.toLowerCase().includes("help")) {
      response = "How can I assist you today?";
    } else {
      response = "I’m sorry, I didn’t understand that. Can you try again?";
    }

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, type: "bot", likes: 0, dislikes: 0 }
      ]);
      setIsTyping(false);  // Stop typing animation
    }, 2000);  // Simulate delay for bot response
  };

  const getRandomGreeting = () => {
    const greetings = [
      "Hello! How can I help you today?",
      "Hey there! What can I do for you?",
      "Hi! How's it going?",
      "Good day! How can I assist you?"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };

  const handleOptionClick = (option) => {
    console.log(option);
    setShowOptions(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleLike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].likes += 1;
    setMessages(updatedMessages);
  };

  const handleDislike = (index) => {
    const updatedMessages = [...messages];
    updatedMessages[index].dislikes += 1;
    setMessages(updatedMessages);
  };

  return (
    <div className={`chat-area ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="chat-header">
        <h2 className="chat-title">DermaAI Consultancy</h2>
        <div className="profile-icon">
          <i className="fas fa-user"></i>
        </div>
        <div className="status">Online</div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message-container ${msg.type === "bot" ? "bot-message" : "user-message"}`}>
            <div className="profile-icon">
              {msg.type === "user" ? (
                <i className="fas fa-user"></i>
              ) : (
                <img src="path-to-your-dermalogo.png" alt="Dermalogo" />
              )}
            </div>
            <div className="message">{msg.text}</div>
            <div className="message-actions">
              <button onClick={() => handleLike(index)}>
                <i className="fas fa-thumbs-up"></i> {msg.likes}
              </button>
              <button onClick={() => handleDislike(index)}>
                <i className="fas fa-thumbs-down"></i> {msg.dislikes}
              </button>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="message-container bot-message">
            <div className="profile-icon">
              <img src="path-to-your-dermalogo.png" alt="Dermalogo" />
            </div>
            <div className="message typing-indicator">
              <span>...</span>
            </div>
          </div>
        )}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>
          <i className="fas fa-paper-plane"></i>
        </button>

        <button
          className="icon-button"
          ref={iconButtonRef}
          onClick={() => setShowOptions(!showOptions)}
        >
          <i className="fa fa-ellipsis-v"></i>
        </button>

        {showOptions && (
          <div className="options-menu" ref={optionsMenuRef}>
            <button onClick={() => handleOptionClick("Upload Skin Image from Device")}>
              Upload Skin Image from Device
            </button>
            <button onClick={() => handleOptionClick("Capture Skin Image")}>
              Capture Skin Image
            </button>
            <button onClick={() => handleOptionClick("Upload Skin Image")}>
              Upload Skin Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatArea;
