import React from "react";
import { FaArrowRight,FaArrowUp,FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cta.css";
import cta from "../../assets/cta.jpg";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <h2>
          Make Compliance Your
          Competitive Advantage
        </h2>

        <p>
          Partner with us for reliable business registration, taxation,
          GST compliance and government services — delivered with
          accuracy, transparency and expert guidance.
        </p>

        <div className="cta-buttons">
         <Link
  to="/"
  className="primary-btn"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
>
  Get Started 
</Link>

         
        </div>

      </div>

     

      {/* Decorative Gradient Shapes */}
      <div className="cta-shape left"></div>
      <div className="cta-shape right"></div>
    </section>
  );
};

export default CTASection;