import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import ChatArea from "./component/ChatArea";
import Response from "./component/Response";
import ProfileHeader from "./component/profile/ProfileHeader";
import Profile from "./component/profile/profile";
import ProfileFooter from "./component/profile/profilefooter";
import ProfileEdit from "./component/profile/ProfileEdit"; // Import Edit Profile Page
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
    <Router>
      <div className="app-container">
        <Sidebar chatHistory={chatHistory} onSelectChat={selectChat} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <ChatArea
                  selectedChat={selectedChat}
                  messages={messages}
                  onSendMessage={handleSendMessage}
                />
                <Response messages={messages} />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="profile-container">
                <ProfileHeader />
                <div className="profile-main-container">
                  <Profile />
                </div>
                <ProfileFooter />
              </div>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <div className="profile-container">
                <ProfileHeader />
                <div className="profile-main-container">
                  <ProfileEdit />
                </div>
                <ProfileFooter />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
