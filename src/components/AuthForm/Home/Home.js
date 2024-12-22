import React from "react";
import "./Home.css";
import { Link } from 'react-router-dom';

// Import images from the `src` directory
import heroImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/home.jpg"; // For hero section
import trackImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Track.jpg"; // For Skin Health Tracker
import recoImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/Reco.jpg"; // For AI-Powered Recommendations
import virImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/vir.jpg"
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Your AI Dermatologist in a Few Clicks</h1>
          <p>
            Experience fast, accurate, and expert-backed skin diagnosis with our
            easy-to-use web application.
          </p>
          <button className="btn primary"><Link to="/chatbot" style={{ color: 'inherit', textDecoration: 'none' }}>
          Start Your Diagnosis</Link></button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero Section" />
        </div>
      </header>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Why Our App Stands Out?</h2>
        <div className="highlight-cards">
          <div className="card">
            <h3>AI Diagnosis</h3>
            <p>Our AI ensures accurate analysis for better skin care.</p>
          </div>
          <div className="card">
            <h3>Expert Advice</h3>
            <p>Connect with certified dermatologists instantly.</p>
          </div>
          <div className="card">
            <h3>Personalized Treatment</h3>
            <p>
              Custom solutions designed for your unique skin type and disease.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products/Services */}
      <section className="featured">
        <h2>Our Offerings</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img src={trackImage} alt="Skin Health Tracker" />
            <h3>Skin Health Tracker</h3>
            <p>Monitor your skin's progress over time with AI insights.</p>
          </div>
          <div className="featured-item">
            <img src={recoImage} alt="AI-Powered Recommendations" />
            <h3>AI-Powered Recommendations</h3>
            <p>
              Receive product and routine suggestions personalized for you.
            </p>
          </div>
          <div className="featured-item">
            <img src={virImage} alt="Virtual Consultation" />
            <h3>Virtual Consultation</h3>
            <p>
              Book a dermatologist session from the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>
              "This app transformed my skin care routine. Absolutely love it!"
            </p>
            <span>- Keerti M.</span>
          </div>
          <div className="testimonial">
            <p>
              "AI diagnosis was spot on and helped me find the right treatment."
            </p>
            <span>- Shamal P.</span>
          </div>
          <div className="testimonial">
            <p>
              "Convenient and effective. Highly recommend it to everyone."
            </p>
            <span>- Siddheshwar P.</span>
          </div>
        </div>
      </section>

      {/* Expert Consultancy */}
      <section className="Consult">
        <h2>Start Your Skin Care Journey Now</h2>
        <p>
          Don’t wait to address your skin concerns. Get in contact with an
          expert near you.
        </p>
        <form className="Expert_Consutant">
          <input type="text" placeholder="Enter your location" />
          <button type="submit" className="btn primary">Search</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
