import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/AuthForm/LoginForm"; 
import RegisterForm from "./components/AuthForm/RegisterForm"; 
import Header from "./components/AuthForm/Header";
import CardsGrid from "./components/AuthForm/CardsGrid";
import Feedback  from "./components/AuthForm/Feedback";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/head" element={<Header />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/diseases" element={<CardsGrid />} />
        <Route path="/feedback" element={<Feedback />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
