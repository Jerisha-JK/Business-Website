import React from "react";
import {
  FaUserTie,
  FaHandshake,
  FaCheckCircle,
  FaClock,
  FaCogs,
  FaHeadset,
} from "react-icons/fa";
import "./Why.css";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserTie />,
      title: "Expertise You Can Trust",
      desc: "Skilled professionals providing dependable and compliant business services.",
    },
    {
      icon: <FaHandshake />,
      title: "End-to-End Support",
      desc: "Comprehensive support covering every stage of your business journey.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Transparent Pricing",
      desc: "No hidden charges. Clear communication and honest pricing at every stage.",
    },
    {
      icon: <FaClock />,
      title: "Fast & Efficient Service",
      desc: "Quick turnaround time without compromising quality or accuracy.",
    },
    {
      icon: <FaCogs />,
      title: "Personalized Solutions",
      desc: "Tailored business solutions designed to meet your specific needs and goals.",
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Customer Support",
      desc: "Friendly and responsive support to address your queries quickly.",
    },
  ];

  return (
    <section className="why-section">
      <div className="why-container">
        <h2 className="why-title">Why Choose Us</h2>
        <p className="why-subtitle">
          Reliable, compliant, and growth-focused solutions for your business.
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;