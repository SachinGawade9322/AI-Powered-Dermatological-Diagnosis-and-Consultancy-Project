import React, { useState } from "react";
import "./Feedback.css"; // Assuming the CSS is in the same folder

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: 1,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission
  const [showPopup, setShowPopup] = useState(false); // Track popup visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email.";
    if (!formData.feedback) newErrors.feedback = "Feedback cannot be empty.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission (e.g., send data to server)
      console.log("Form submitted", formData);

      // Show popup after successful submission
      setIsSubmitted(true);
      setShowPopup(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form for AI Dermatological Application</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="feedback">Feedback</label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Provide your feedback"
          />
          {errors.feedback && <p className="error">{errors.feedback}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="rating">Rating</label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Submit Feedback</button>
      </form>

      {/* Popup Message */}
      {showPopup && (
        <div className="popup-message">
          <p>Thank you for your feedback!</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
