import "./Contact.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactImage from "../../assets/call1.png";

function ContactSection() {
  const WHATSAPP_NUMBER = "919384223102"; // 🔥 Replace with your number
  // const BUSINESS_EMAIL = "yourmail@gmail.com";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, phone, purpose } = formData;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;

  if (!name || !email || !phone || !purpose) {
    toast.error("Please fill all fields");
    return;
  }

  if (!emailPattern.test(email)) {
    toast.error("Enter valid email address");
    return;
  }

  if (!phonePattern.test(phone)) {
    toast.error("Enter valid 10-digit phone number");
    return;
  }

  const message = `Hello JR Corporate Solutions,

Name: ${name}
Email: ${email}
Phone: +91${phone}
Service: ${purpose}`;

  const encodedMessage = encodeURIComponent(message);

  // 1️⃣ Open WhatsApp
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
    "_blank"
  );

   // 2️⃣ Open Email Client
  // window.open(
  //   `mailto:${BUSINESS_EMAIL}?subject=New Business Enquiry&body=${encodedMessage}`,
  //   "_blank"
  // );

      toast.success("Redirecting to WhatsApp...");
   
  };

  return (
    <>
    
    <section className="contact-section">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="contact-wrapper">

        {/* Left */}
        <div className="contact-left">
          <h2>Let’s Discuss Your Business Needs</h2>

          <div className="contact-image">
            <img src={contactImage} alt="Business Support" />
          </div>

          <p>
            Our team provides expert assistance in registration, taxation,
            GST compliance, and government services.
          </p>
        </div>

        {/* Right */}
        <div className="contact-card">
          <h3>Get in Touch</h3>

          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                />
              <label>Full Name</label>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
              <label>Email Address</label>
            </div>

            <div className="form-group phone-group">
              <span className="country-code">+91</span>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength="10"
                required
                />
              <label>Phone Number</label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
                />
              <label>What's Your Business Need</label>
            </div>

            {/* <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Connecting..." : (
                <>
                <IoLogoWhatsapp className="btn-icon" />
                Connect With Us
                </>
                )}
                </button> */}

            <button type="submit" className="submit-btn">
  <IoLogoWhatsapp className="btn-icon" />
  Connect With Us
</button>

          </form>
        </div>

      </div>
    </section>
    
      </>
  );
}

export default ContactSection;