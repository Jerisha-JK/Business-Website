import { useState } from "react";
import { FaWhatsapp, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import "../Styles/Register/Register.css";

function RegistrationLayout({
  leftTitle,
  benefits = [],
  formTitle,
  defaultService = "",
  serviceOptions = null, // if dropdown needed
  whatsappNumber = "919384223102",
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: defaultService,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, service } = formData;

    if (!name || !email || !phone || !service) {
      alert("Please fill in all required fields.");
      return;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    const message = `
Hello JR Corporate Solutions,

Service: *${service}*
Name: ${name}
Email: ${email}
Phone: ${phone}
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="registration-section">
      <div className="registration-wrapper">

        {/* LEFT SIDE */}
        <motion.div
          className="registration-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 dangerouslySetInnerHTML={{ __html: leftTitle }} />

          <ul className="benefits-list">
            {benefits.map((item, index) => (
              <li key={index}>
                <FaCheckCircle /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="registration-form-card"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3>{formTitle}</h3>

          <form onSubmit={handleSubmit} className="registration-form">

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />

            {/* 🔥 Conditional Rendering */}
            {serviceOptions ? (
              <select
                name="service"
                required
                onChange={handleChange}
                value={formData.service}
              >
                <option value="">Select Service</option>
                {serviceOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type="text"
                name="service"
                value={formData.service}
                readOnly
                className="readonly-field"
              />
            )}

            <button type="submit" className="registration-btn">
              <FaWhatsapp /> Request Now
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default RegistrationLayout;