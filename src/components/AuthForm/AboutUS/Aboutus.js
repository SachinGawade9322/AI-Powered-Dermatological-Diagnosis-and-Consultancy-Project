import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./Aboutus.css";


const Aboutus = () => {
  return (
    <div id="about-us" className="about-us-section">
      <div className="container">
        <h1 className="title">About Us</h1>
        <p className="intro">
          Welcome to <strong>Derma AI</strong>, where innovation meets impact!
        </p>
        <section className="vision-section">
          <h2>Our Vision</h2>
          <p>
            To make high-quality dermatological care accessible, affordable, and efficient by bridging the gap between
            technology and medical expertise.
          </p>
        </section>
        <section className="approach-section">
          <h2>Our Approach</h2>
          <ul className="approach-list">
            <li>
              <strong>AI-Driven Solutions:</strong> Leveraging advanced machine learning models to deliver precise skin
              disease diagnoses.
            </li>
            <li>
              <strong>Collaboration with Experts:</strong> Partnering with top dermatologists to validate and enhance our
              solutions.
            </li>
            <li>
              <strong>User-Centric Design:</strong> Creating intuitive tools that empower users to take charge of their
              skin health.
            </li>
          </ul>
        </section>
        <section className="why-choose-us-section">
          <h2>Why Choose Us?</h2>
          <p>
            At <strong>Derma AI</strong>, we believe in combining science, empathy, and
            innovation. Our commitment to excellence and user satisfaction drives us to constantly improve and evolve
            our solutions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;
