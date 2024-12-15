import React, { useState } from "react";
import "./Sidebar.css";

function Sidebar({ chatHistory, onSelectChat }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNewChat, setShowNewChat] = useState(false);
  const [pinnedChats, setPinnedChats] = useState([]);
  const [showMenu, setShowMenu] = useState(null); // State to track which chat's menu is open

  const filteredChats = chatHistory.filter((chat) =>
    chat.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlePin = (chat) => {
    if (!pinnedChats.includes(chat)) {
      setPinnedChats([...pinnedChats, chat]);
    }
  };

  const handleDelete = (chat) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this chat?");
    if (confirmDelete) {
      const updatedChats = chatHistory.filter((item) => item !== chat);
      onSelectChat(updatedChats);  // Assuming `onSelectChat` updates the chatHistory
    }
  };

  const handleNewChat = () => {
    setShowNewChat(!showNewChat);
    onSelectChat("New Chat");
  };

  const handleMenuToggle = (chat) => {
    setShowMenu(showMenu === chat ? null : chat); // Toggle the menu for a specific chat
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="new-chat-btn" onClick={handleNewChat}>New Chat</button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>

      <div className="pinned-chats">
        <h3>Pinned Chats</h3>
        <ul>
          {pinnedChats.map((chat, index) => (
            <li key={index} onClick={() => onSelectChat(chat)}>
              {chat}
              <span className="pin-btn">🔒</span>
            </li>
          ))}
        </ul>
      </div>

      <h2>Chat History</h2>
      <ul>
        {filteredChats.map((chat, index) => (
          <li key={index}>
            {chat}
            <button
              className="menu-btn"
              onClick={() => handleMenuToggle(chat)}
            >
              &#x22EE; {/* Ellipsis (menu icon) */}
            </button>

            {showMenu === chat && (
              <div className="chat-menu">
                <button onClick={() => handlePin(chat)}>Pin</button>
                <button onClick={() => handleDelete(chat)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
