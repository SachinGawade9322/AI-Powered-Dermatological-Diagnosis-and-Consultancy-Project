import React, { useState } from "react";
import "./Forum.css";

function Forum() {
  const [channels, setChannels] = useState([
    { id: 1, name: "Skin Conditions" },
    { id: 2, name: "General Discussions" },
    { id: 3, name: "Treatment Advice" },
  ]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedChannel, setSelectedChannel] = useState(channels[0].id);
  const [username, setUsername] = useState("User123");
  const [newChannelName, setNewChannelName] = useState("");
  const [showCreateChannelModal, setShowCreateChannelModal] = useState(false);
  const [showJoinChannelModal, setShowJoinChannelModal] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { channelId: selectedChannel, user: username, content: newMessage },
      ]);
      setNewMessage("");
    }
  };

  const handleChangeChannel = (channelId) => {
    setSelectedChannel(channelId);
  };

  const handleCreateChannel = () => {
    if (newChannelName.trim()) {
      const newChannel = {
        id: channels.length + 1,
        name: newChannelName,
      };
      setChannels([...channels, newChannel]);
      setShowCreateChannelModal(false);
      setNewChannelName("");
    }
  };

  const handleJoinChannel = (channelId) => {
    setSelectedChannel(channelId);
    setShowJoinChannelModal(false);
  };

  return (
    <div className="forum-container">
      <div className="channels-sidebar">
        <h2>Channels</h2>
        <ul className="channels-list">
          {channels.map((channel) => (
            <li
              key={channel.id}
              className={selectedChannel === channel.id ? "active" : ""}
              onClick={() => handleChangeChannel(channel.id)}
            >
              # {channel.name}
            </li>
          ))}
        </ul>
        <div className="channel-actions">
          <button
            className="button"
            onClick={() => setShowCreateChannelModal(true)}
          >
            Create Channel
          </button>
          <button
            className="button"
            onClick={() => setShowJoinChannelModal(true)}
          >
            Join Channel
          </button>
        </div>
      </div>

      <div className="chat-area">
        <div className="chat-header">
          <h2>{channels.find((c) => c.id === selectedChannel)?.name}</h2>
        </div>

        <div className="messages">
          {messages
            .filter((msg) => msg.channelId === selectedChannel)
            .map((msg, index) => (
              <div key={index} className="message">
                <div className="message-user">
                  <span className="avatar">{msg.user[0]}</span>
                  <span className="username">{msg.user}</span>
                </div>
                <div className="message-content">{msg.content}</div>
              </div>
            ))}
        </div>

        <div className="chat-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>

      {/* Create Channel Modal */}
      {showCreateChannelModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Create New Channel</h3>
            <input
              type="text"
              placeholder="Enter channel name"
              value={newChannelName}
              onChange={(e) => setNewChannelName(e.target.value)}
            />
            <button onClick={handleCreateChannel}>Create</button>
            <button onClick={() => setShowCreateChannelModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {/* Join Channel Modal */}
      {showJoinChannelModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Join Channel</h3>
            <ul className="channels-list">
              {channels
                .filter((channel) => channel.id !== selectedChannel)
                .map((channel) => (
                  <li
                    key={channel.id}
                    onClick={() => handleJoinChannel(channel.id)}
                  >
                    # {channel.name}
                  </li>
                ))}
            </ul>
            <button onClick={() => setShowJoinChannelModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Forum;
