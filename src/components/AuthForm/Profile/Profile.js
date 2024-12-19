import React, { useState } from "react";
import { FaUserCircle, FaEdit } from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    profilePicture: "https://via.placeholder.com/150",
  });

  // Handle edit button click
  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Optionally save the updated data
    alert("Profile Updated");
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <FaUserCircle className="profile-icon" />
        <h2>Profile</h2>
      </div>

      <div className="profile-details">
        {isEditing ? (
          <form onSubmit={handleFormSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={userData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="save-btn">
              Save Changes
            </button>
          </form>
        ) : (
          <div className="profile-info">
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="profile-image"
            />
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            <p><strong>Phone:</strong> {userData.phone}</p>
            <button className="edit-btn" onClick={handleEditClick}>
              <FaEdit /> Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
