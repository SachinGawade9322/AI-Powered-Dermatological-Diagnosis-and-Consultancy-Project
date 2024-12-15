import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Your AI Dermatologist in a Few Clicks</h1>
          <p>Experience fast, accurate, and expert-backed skin diagnosis with our easy-to-use web application.</p>
          <button className="btn primary">Start Your Diagnosis</button>
        </div>
        <div className="hero-image">
          <img src="C:\Mega Project\dermaconsult\src\components\WhatsApp Image 2024-12-14 at 11.19.50 PM.jpeg" alt="Skin care hero" />
        </div>
      </header>

      {/* Highlights Section */}
      <section className="highlights">
        <h2>Why Our App Stands Out?</h2>
        <div className="highlight-cards">
          <div className="card">
            <img src="/images/ai-diagnosis.png" alt="AI Diagnosis" />
            <h3>AI Diagnosis</h3>
            <p>Our AI ensures accurate analysis for better skin care.</p>
          </div>
          <div className="card">
            <img src="/images/consultation.png" alt="Consultation" />
            <h3>Expert Advice</h3>
            <p>Connect with certified dermatologists instantly.</p>
          </div>
          <div className="card">
            <img src="/images/treatment.png" alt="Personalized Treatment" />
            <h3>Personalized Treatment</h3>
            <p>Custom solutions designed for your unique skin type and disease.</p>
          </div>
        </div>
      </section>

      {/* Featured Products/Services */}
      <section className="featured">
        <h2>Our Offerings</h2>
        <div className="featured-grid">
          <div className="featured-item">
            <img src="/images/feature1.jpg" alt="Feature 1" />
            <h3>Skin Health Tracker</h3>
            <p>Monitor your skin's progress over time with AI insights.</p>
          </div>
          <div className="featured-item">
            <img src="/images/feature2.jpg" alt="Feature 2" />
            <h3>AI-Powered Recommendations</h3>
            <p>Receive product and routine suggestions personalized for you.</p>
          </div>
          <div className="featured-item">
            <img src="/images/feature3.jpg" alt="Feature 3" />
            <h3>Virtual Consultation</h3>
            <p>Book a dermatologist session from the comfort of your home.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>"This app transformed my skin care routine. Absolutely love it!"</p>
            <span>- Keerti M.</span>
          </div>
          <div className="testimonial">
            <p>"AI diagnosis was spot on and helped me find the right treatment."</p>
            <span>- Shamal P.</span>
          </div>
          <div className="testimonial">
            <p>"Convenient and effective. Highly recommend it to everyone."</p>
            <span>- Siddheshwar P.</span>
          </div>
        </div>
      </section>

      {/* Expert Consultancy */}
      <section className="Consult">
        <h2>Start Your Skin Care Journey Now</h2>
        <p>Don’t wait to address your skin concerns. Get in contact with an expert near you.</p>
        <form className="Expert_Consutant">
          <input type="location" placeholder="Enter your location" />
          <button type="submit" className="btn primary">Search</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms & Conditions</a>
        </div>
        <p>© 2024 AI Dermatology. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
