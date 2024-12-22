import React, { useState } from "react";
import "./Profile.css";

function Profile() {
  const [medicalHistory, setMedicalHistory] = useState([
    "Eczema",
    "Acne",
    "Psoriasis",
  ]);

  const [uploadedImages, setUploadedImages] = useState([
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ]);

  const addMedicalHistory = () => {
    const condition = prompt("Enter a new medical condition:");
    if (condition) {
      setMedicalHistory([...medicalHistory, condition]);
    }
  };

  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setUploadedImages([...uploadedImages, newImage]);

      // Cleanup created object URLs when the component unmounts
      return () => URL.revokeObjectURL(newImage);
    }
  };

  const handleDeleteHistory = (index) => {
    const updatedHistory = medicalHistory.filter((_, i) => i !== index);
    setMedicalHistory(updatedHistory);
  };

  const handleDeleteImage = (index) => {
    const updatedImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(updatedImages);
  };

  return (
    <div className="profile-container">
      {/* Sidebar */}
      <div className="profile-sidebar">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="profile-img"
        />
        <button className="edit-btn">Edit Profile</button>
        <input
          type="file"
          accept="image/*"
          id="upload"
          style={{ display: "none" }}
          onChange={uploadImage}
        />
        <label htmlFor="upload" className="upload-btn">
          Upload Images
        </label>
      </div>

      {/* Main Section */}
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
              AI Dermatology Expert specializing in skin condition analysis
              through advanced machine learning techniques.
            </p>
          </div>
        </div>

        <h3>Medical History</h3>
        <ul className="medical-history">
          {medicalHistory.map((condition, index) => (
            <li key={index}>
              {condition}
              <button
                className="delete-btn"
                onClick={() => handleDeleteHistory(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button className="add-history-btn" onClick={addMedicalHistory}>
          Add Medical History
        </button>

        <h3>Uploaded Images</h3>
        <div className="uploaded-images">
          {uploadedImages.map((image, index) => (
            <div key={index} className="image-container">
              <img src={image} alt={`Uploaded ${index}`} />
              <button
                className="delete-btn"
                onClick={() => handleDeleteImage(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <button className="settings-btn">Advanced Settings</button>
      </div>
    </div>
  );
}

export default Profile;
