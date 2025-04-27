// import React, { useState } from "react";
// import { FaEnvelope, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import "./LoginForm.css";

// const LoginForm = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Retrieve user data from localStorage
//     const storedUser = JSON.parse(localStorage.getItem("user"));

//     if (!storedUser || storedUser.email !== email) {
//       alert("User not registered! Redirecting to Registration page...");
//       navigate("/register");
//     } else if (storedUser.password !== password) {
//       alert("Incorrect password!");
//     } else {
//       alert("Login Successful!");
//       navigate("/dashboard");
//     }
//   };

//   return (
//     <div className="container">
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <div className="form-group">
//           <FaEnvelope className="icon" />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <FaLock className="icon" />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn">Login</button>
//         <div className="redirect">
//           <p>Not registered?</p>
//           <button
//             type="button"
//             className="btn-secondary"
//             onClick={() => navigate("/register")}
//           >
//             Register Here
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Send login data to Flask API
      const response = await axios.post("http://127.0.0.1:5000/auth/login", {
        email: email,
        password: password,
      });

      // Store JWT token in localStorage (for authentication)
      localStorage.setItem("token", response.data.token);

      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to dashboard
    } catch (error) {
      alert(error.response?.data?.error || "Login failed!");
    } finally {
      setLoading(false);
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
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
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
