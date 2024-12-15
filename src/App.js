import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import ChatArea from "./component/ChatArea";
import Response from "./component/Response";
import "./App.css";

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatHistory, setChatHistory] = useState([
    "Previous Chat 1",
    "Previous Chat 2",
    "Previous Chat 3",
  ]);
  const [messages, setMessages] = useState([]);

  const selectChat = (chat) => {
    setSelectedChat(chat);
    setMessages([`Resuming: ${chat}`, "Here are some previous responses."]);
  };

  const handleSendMessage = (message) => {
    const newMessages = [...messages, { text: message, type: "user" }];
    setMessages(newMessages);
    setChatHistory([...chatHistory, message]);

    const botResponse = { text: `Bot's response to: ${message}`, type: "bot" };
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);
  };

  return (
    <div className="app-container">
      <Sidebar chatHistory={chatHistory} onSelectChat={selectChat} />
      <ChatArea
        selectedChat={selectedChat}
        messages={messages}
        onSendMessage={handleSendMessage}
      />
      <Response messages={messages} />
    </div>
  );
}

export default App;
