import React, { useState } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatHistory, setChatHistory] = useState(["Chat 1", "Chat 2", "Chat 3"]);

  const handleSelectChat = (chat) => {
    setSelectedChat(chat);
  };

  const handleNewChat = (newChat) => {
    setChatHistory([newChat, ...chatHistory]);
    setSelectedChat(newChat);
  };

  return (
    <div className="chatbot-container">
      <Sidebar chatHistory={chatHistory} onSelectChat={handleSelectChat} />
      <ChatArea selectedChat={selectedChat} onNewChat={handleNewChat} />
    </div>
  );
}

function Sidebar({ chatHistory, onSelectChat }) {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredChats = chatHistory.filter((chat) =>
    chat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Chats</h2>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>
      <ul className="chat-list">
        {filteredChats.map((chat, index) => (
          <li key={index} onClick={() => onSelectChat(chat)}>
            {chat}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ChatArea({ selectedChat }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "user" }]);
      setInput("");

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "This is an automated response!", type: "bot" },
        ]);
      }, 1000);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMessages([...messages, { text: `📁 Uploaded: ${file.name}`, type: "user" }]);
    }
  };

  const handleOpenCamera = () => {
    const cameraInput = document.createElement("input");
    cameraInput.type = "file";
    cameraInput.accept = "image/*";
    cameraInput.capture = "environment"; // Opens camera directly
    cameraInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setMessages([...messages, { text: `📷 Captured: ${file.name}`, type: "user" }]);
      }
    };
    cameraInput.click();
  };

  return (
    <div className="chat-area">
      <div className="chat-header">
        <h2>{selectedChat || "New Chat"}</h2>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.type === "user" ? "user-message" : "bot-message"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
        <button onClick={handleOpenCamera} className="camera-btn">
          📷
        </button>
        <label className="file-upload-btn">
          📁
          <input type="file" onChange={handleFileUpload} style={{ display: "none" }} />
        </label>
      </div>
    </div>
  );
}

export default Chatbot;
