import "./Footer.css";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp 
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Company Info */}
          <div className="footer-col">
            <h2 className="footer-logo">JR Corporate Solutions</h2>
            <p>
              We provide reliable registration, taxation, GST and government 
              e-services to help businesses grow with confidence and compliance.
            </p> <br /><br />
            <div className="footer-col">
            <h3>Contact Us</h3>
            <p><FaPhoneAlt className="icon" /> +91-9384223102</p>
            <p><FaEnvelope className="icon" /> jrcorp4@gmail.com</p>
          </div>
          </div>

          {/* Branch Addresses */}
          <div className="footer-col">
            <h3>Our Branches</h3><br />

            <i><strong>Main Branch</strong></i><br />
            <p>
              <FaMapMarkerAlt className="icon" />
              
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                1/3 Near Annai Hospital,<br />
                 Karungal, Kanyakumari,<br />
                 Tamil Nadu 629157
              </a>
            </p><br /><br />
<strong>

            <i>Sub Branch</i>
</strong>
            <p>
              <FaMapMarkerAlt className="icon" />
              <a 
                href="https://maps.app.goo.gl/y9ib7cGud9N3z3Uy9" 
                target="_blank" 
                rel="noopener noreferrer"
              >
               77B,Thazhayankottai,<br />
                Karungal, Kanyakumari ,<br />
                Tamil Nadu 629157
              </a>
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              <li>Business Registration</li>
              <li>GST Filing</li>
              <li>Tax Consultancy</li>
              <li>Company / LLP Registration</li>
              <li>Government E-Services</li>
              <li>Trademark Registration</li>
            </ul>
          </div>

          {/* Contact Info */}
          

        </div>

        <div className="footer-bottom">
          © 2026 JR Corporate Solutions Pvt Ltd. All Rights Reserved.
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919384223102"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default Footer;