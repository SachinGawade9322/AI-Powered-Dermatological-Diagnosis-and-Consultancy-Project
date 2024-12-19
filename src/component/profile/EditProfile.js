import React, { useState } from "react";
import "./profileEdit.css"; // Assuming your CSS file is in the same folder

function ProfileEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file)); // Preview the selected photo
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, mobile, address });
    // Add your submission logic here (e.g., update API or local state)
  };

  return (
    <div className="edit-profile-container">
      <div className="edit-profile-photo">
        <img src={photo || "default-profile.jpg"} alt="Profile" />
        <input type="file" onChange={handleFileChange} />
      </div>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Mobile:</label>
        <input
          type="tel"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
        <label>Address:</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default ProfileEdit;
