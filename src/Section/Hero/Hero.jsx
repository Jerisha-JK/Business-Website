import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Hero.css";
import heroBg from "../../assets/her.jpg"; // your background image

function Hero() {
  const navigate = useNavigate();
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* <h1>
            Complete Business & Compliance Solutions{" "}
            <span className="highlight">Solutions Under </span> One Roof
          </h1> */}

          <h2>
            Complete {" "}
            <span className="highlight">Business Solutions </span>Under One Roof
          </h2>

          

          <p>
           Reliable company registration, GST, taxation, 
           and compliance services delivered with accuracy and trust.
          </p>

          

          <div className="hero-buttons">
            <button 
      className="primary-btn"
      onClick={() => navigate("/contact")}
    >
      Enquire Now <FaArrowRight />
    </button>

            {/* <button className="secondary-btn">
              Our Services
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;