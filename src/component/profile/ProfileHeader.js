import React from 'react';
import './ProfileHeader.css';

function ProfileHeader() {
  return (
    <header className="profile-header">
      <div className="logo">
        <h1>Dream AI Consultancy</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default ProfileHeader;
