import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser || storedUser.email !== email) {
      alert("User not registered! Redirecting to Registration page...");
      navigate("/register");
    } else if (storedUser.password !== password) {
      alert("Incorrect password!");
    } else {
      alert("Login Successful!");
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Login</button>
        <div className="redirect">
          <p>Not registered?</p>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => navigate("/register")}
          >
            Register Here
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
