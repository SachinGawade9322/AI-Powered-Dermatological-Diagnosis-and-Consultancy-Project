import React from "react";
import "../styles/Sidebar.css";


function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="server-title">DermaAI</h2>
      <div className="text-channels">
        <h3>Text Channels</h3>
        <div className="channel-item"># forum</div>
        <div className="channel-item"># advice</div>
      </div>
      <div className="user-status">
        <div className="status-indicator online"></div>
        <span>User (Online)</span>
      </div>
    </div>
  );
}

export default Sidebar;
