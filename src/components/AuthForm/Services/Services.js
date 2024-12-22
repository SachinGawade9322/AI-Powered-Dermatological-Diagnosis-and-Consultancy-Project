import React from 'react';
import './Services.css';  
import AImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/A.jpg";
import perImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/per.jpg";
import docImage from "E:/Final-year-pro/AI-Powered-Dermatological-Diagnosis-and-Consultancy-Project/src/assets/images/docreco.jpg";

const services = [
    {
        title: "AI-Powered Diagnosis",
        description: "Get accurate dermatological diagnosis powered by advanced AI models.",
        image: AImage, 
    },
    {
        title: "Consultation with Experts",
        description: "Connect with certified dermatologists for a one-on-one consultation.",
        image: perImage,
    },
    {
        title: "Personalized Treatment Plans",
        description: "Receive customized treatment recommendations based on your condition.",
        image: docImage,
    },
];

const Services = () => {
    return (
        <div className="services-page">
            <section className="services-header">
                <h1>Our Services</h1>
                <p>We offer AI-driven dermatological solutions and expert consultations to help you achieve healthier skin.</p>
            </section>

            <section className="services-list">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt={service.title} className="service-img" />
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                    </div>
                ))}
            </section>

            <section className="services-benefits">
                <h2>Why Choose Our Services?</h2>
                <ul>
                    <li>AI-powered accuracy in diagnosing skin diseases.</li>
                    <li>Access to certified dermatologists for consultations.</li>
                    <li>Personalized treatment plans based on your skin type.</li>
                    <li>Confidential and secure online platform.</li>
                </ul>
            </section>

        </div>
    );
};

export default Services;
