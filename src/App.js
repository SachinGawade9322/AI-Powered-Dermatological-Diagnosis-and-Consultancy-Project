import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Components
import LoginForm from "./components/AuthForm/LoginForm/LoginForm";
import RegisterForm from "./components/AuthForm/RegisterForm/RegisterForm";
import Header from "./components/AuthForm/Header/Header";
import CardsGrid from "./components/AuthForm/CardsGrid/CardsGrid";
import Feedback from "./components/AuthForm/Feedback/Feedback";
import Chatbot from "./components/AuthForm/Chatbot/Chatbot";
import Footer from "./components/AuthForm/Footer/Footer";
import Home from "./components/AuthForm/Home/Home";
import Aboutus from "./components/AuthForm/AboutUS/Aboutus";
import Dashboard from "./components/AuthForm/Dashboard/Dashboard";
import Profile from "./components/AuthForm/Profile/Profile";
import Forum from "./components/AuthForm/Forum/Forum";
import Services from "./components/AuthForm/Services/Services";

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
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/services" element={<Services/>} />

        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>

      <FooterControl />
    </Router>
  );
};

// New FooterControl component to handle conditional Footer rendering
const FooterControl = () => {
  const location = useLocation();

  // List of routes where we do NOT want the footer
  const noFooterRoutes = ["/login", "/register", "/chatbot", "/forum"];

  return !noFooterRoutes.includes(location.pathname) ? <Footer /> : null;
};

export default App;
