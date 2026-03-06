import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Clients.css";
import c1 from "../../assets/C1.png";
import c2 from "../../assets/C2.png";
import c3 from "../../assets/C3.png";
import c4 from "../../assets/C4.png";
import c5 from "../../assets/C5.png";


const Clients = () => {
  const sliderRef = useRef(null);

  const logos = [
    c1,
    c2,
    c3,
    c4,c5
    
  ];

  // Manual scroll
  const scrollLeft = () => {
    sliderRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  useEffect(() => {
  const slider = sliderRef.current;

  const autoScroll = setInterval(() => {
    if (slider) {
      slider.scrollLeft += 1;   // increase this for more speed

      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }
  }, 10);  // lower = faster, higher = slower

  return () => clearInterval(autoScroll);
}, []);

  return (
    <section className="clients-section">
      <div className="clients-container">
        <h5 className="clients-title">Our Amazing Clients</h5>
        <p className="clients-subtitle">
          Trusted by 100+ Businesses
        </p>
        <br />

        <div className="slider">
          <button className="arrow-btn" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="slide-track" ref={sliderRef}>
            {[...logos, ...logos].map((logo, index) => (
              <div className="slide" key={index}>
                <img src={logo} alt={`Client ${index + 1}`} />
              </div>
            ))}
          </div>

          <button className="arrow-btn" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Clients;