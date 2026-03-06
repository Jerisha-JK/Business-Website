import { motion } from "framer-motion";
import { FaShieldAlt, FaChartLine, FaUsers, FaFileAlt } from "react-icons/fa";
import "./About.css";
import c5 from "../../assets/a1.png";

function About() {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={c5} alt="Business Compliance" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>
            <span className="highlight">Your Partner {""}</span>
            in Business Compliance & Tax Solutions
          </h2>

          <p className="about-subtext">
            Simplifying registrations, taxation, and regulatory compliance
            so you can focus on growing your business with confidence.
          </p>

          {/* <div className="about-features">
            <div className="feature-card">
              <FaShieldAlt className="feature-icon" />
              <div>
                <h4>Trusted Compliance</h4>
                <p>Accurate and legally sound documentation services.</p>
              </div>
            </div>

            <div className="feature-card">
              <FaChartLine className="feature-icon" />
              <div>
                <h4>Business Growth</h4>
                <p>Strategic financial and taxation guidance.</p>
              </div>
            </div>

            <div className="feature-card">
              <FaUsers className="feature-icon" />
              <div>
                <h4>Dedicated Support</h4>
                <p>Personalized expert assistance at every stage.</p>
              </div>
            </div>

            <div className="feature-card">
              <FaFileAlt className="feature-icon" />
              <div>
                <h4>Registration & Licensing</h4>
                <p>Seamless business setup & government approvals.</p>
              </div>
            </div> */}
          {/* </div> */}
        </motion.div>

      </div>
    </section>
  );
}

export default About;