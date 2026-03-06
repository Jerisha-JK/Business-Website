import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import "./navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [desktopDropdown, setDesktopDropdown] = useState(null);

  const toggleDesktopDropdown = (menu) => {
    setDesktopDropdown((prev) => (prev === menu ? null : menu));
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`overlay ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Top Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <a href="/">Home</a>
          <div className="desktop-dropdown">
            <div
              className={`desktop-dropdown-title ${
                desktopDropdown === "registrations" ? "rotate" : ""
              }`}
              onClick={() => toggleDesktopDropdown("registrations")}
            >
              Registrations
            </div>
            <div
              className={`desktop-dropdown-menu ${
                desktopDropdown === "registrations" ? "open" : ""
              }`}
            >
              <a href="/company">Company Registration</a>
              <a href="/fssai">FSSAI Registration</a>
              <a href="/trade">Trade License</a>
              <a href="/business-cert">Business Certificate</a>
              <a href="/business-lic">Business License</a>
              <a href="/ngo">NGO</a>
              <a href="/other">Other Services</a>
            </div>
          </div>
          <div className="desktop-dropdown">
            <div
              className={`desktop-dropdown-title ${
                desktopDropdown === "compliance" ? "rotate" : ""
              }`}
              onClick={() => toggleDesktopDropdown("compliance")}
            >
              Compliance / IPR
            </div>
            <div
              className={`desktop-dropdown-menu ${
                desktopDropdown === "compliance" ? "open" : ""
              }`}
            >
              <a href="/msme">MSME Registration</a>
              <a href="/shop">Shop & Establishment Registration</a>
              <a href="/nidhi">Nidhi Company Compliance</a>
              <a href="/ngo-compliance">NGO Compliance</a>
              <a href="/inc">Form INC-20A</a>
              <a href="/trust">Trust Annual Compliance</a>
              <a href="/part">Partnership Firm Tax Return Filing</a>
              <a href="/llp">LLP Annual Compliance</a>
              <a href="/company-name">Company Name Change</a>
              <a href="/change-dir">Change in Director</a>
              <a href="/kyc">DIR-3 KYC for Directors</a>
            </div>
          </div>
          <div className="desktop-dropdown">
            <div
              className={`desktop-dropdown-title ${
                desktopDropdown === "taxation" ? "rotate" : ""
              }`}
              onClick={() => toggleDesktopDropdown("taxation")}
            >
              Taxation
            </div>
            <div
              className={`desktop-dropdown-menu ${
                desktopDropdown === "taxation" ? "open" : ""
              }`}
            >
              <a href="/gst-register">GST Registration</a>
              <a href="/gst-return">GST Return Filing</a>
              <a href="/tax">Tax Registration</a>
            </div>
          </div>
          {/* <a href="/">Taxation</a> */}

          <a href="/contact">Contact Us</a>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${menuOpen ? "active" : ""}`}>
        <div className="sidebar-header">
          <FaTimes className="close-btn" onClick={closeMenu} />
        </div>

        <div className="sidebar-links">
          <a href="/" className="active-link">
            Home
          </a>

          {/* Registrations */}
          <div className="dropdown">
            <div
              className={`dropdown-title ${
                openDropdown === "registrations" ? "active-parent" : ""
              }`}
              onClick={() => toggleDropdown("registrations")}
            >
              Registrations
              <FaChevronDown
                className={`arrow ${
                  openDropdown === "registrations" ? "rotate" : ""
                }`}
              />
            </div>

            <div
              className={`dropdown-menu ${
                openDropdown === "registrations" ? "open" : ""
              }`}
            >
              <a href="/company">Company Registration</a>
              <a href="/fssai">FSSAI Registration</a>
              <a href="/trade">Trade License</a>
              <a href="/business-cert">Business Certificate</a>
              <a href="/business-lic">Business License</a>
              <a href="/ngo">NGO</a>
              <a href="/other">Other Services</a>
            </div>
          </div>

          <div className="dropdown">
            <div
              className={`dropdown-title ${
                openDropdown === "compliance" ? "active-parent" : ""
              }`}
              onClick={() => toggleDropdown("compliance")}
            >
              Compilance / IPR
              <FaChevronDown
                className={`arrow ${
                  openDropdown === "compliance" ? "rotate" : ""
                }`}
              />
            </div>

            <div
              className={`dropdown-menu ${
                openDropdown === "compliance" ? "open" : ""
              }`}
            >
              <a href="/msme">MSME Registration</a>
              <a href="/shop">Shop & Establishment Registration</a>
              <a href="/nidhi">Nidhi Company Compliance</a>
              <a href="/ngo-compliance">NGO Compliance</a>
              <a href="/inc">Form INC-20A</a>
              <a href="/trust">Trust Annual Compliance</a>
              <a href="/part">Partnership Firm Tax Return Filing</a>
              <a href="/llp">LLP Annual Compliance</a>
              <a href="/company-name">Company Name Change</a>
              <a href="/change-dir">Change in Director</a>
              <a href="/kyc">DIR-3 KYC for Directors</a>
            </div>
          </div>

          {/* Taxation */}
          <div className="dropdown">
            <div
              className={`dropdown-title ${
                openDropdown === "taxation" ? "active-parent" : ""
              }`}
              onClick={() => toggleDropdown("taxation")}
            >
              Taxation
              <FaChevronDown
                className={`arrow ${
                  openDropdown === "taxation" ? "rotate" : ""
                }`}
              />
            </div>

            <div
              className={`dropdown-menu ${
                openDropdown === "taxation" ? "open" : ""
              }`}
            >
              <a href="/gst-register">GST Registration</a>
              <a href="/gst-return">GST Return Filing</a>
              <a href="/tax">Tax Registration</a>
            </div>
          </div>

          {/* <a href="/">Services</a> */}
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
