import React from 'react';
import './profile.css';

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <img src="https://via.placeholder.com/150" alt="User" className="profile-img" />
        <button className="edit-btn">Edit Profile</button>
      </div>

      <div className="profile-main">
        <h2>Public Profile</h2>
        <div className="profile-info">
          <div className="profile-detail">
            <h3>Name</h3>
            <p>John Doe</p>
          </div>
          <div className="profile-detail">
            <h3>Email</h3>
            <p>johndoe@example.com</p>
          </div>
          <div className="profile-detail">
            <h3>About</h3>
            <p>
              Experienced AI Consultant with a demonstrated history of working in the
              field of Artificial Intelligence and Machine Learning.
            </p>
          </div>
        </div>
        <button className="settings-btn">Advanced Settings</button>
      </div>
    </div>
  );
}

export default Profile;
