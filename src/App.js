import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import LoginForm from "./components/AuthForm/LoginForm/LoginForm";
import RegisterForm from "./components/AuthForm/RegisterForm/RegisterForm";
import Header from "./components/AuthForm/Header/Header";
import CardsGrid from "./components/AuthForm/CardsGrid/CardsGrid";
import Feedback from "./components/AuthForm/Feedback/Feedback";
import Chatbot from "./components/AuthForm/Chatbot/Chatbot";
import Footer from "./components/AuthForm/Footer/Footer";
import Home from "./components/AuthForm/Home/Home";


// Styles
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/diseases" element={<CardsGrid />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/chatbot" element={<Chatbot />} />

        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
