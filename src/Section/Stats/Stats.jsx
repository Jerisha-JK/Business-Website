import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";
import contactImage from "../../assets/cta.jpg";
import { FaProjectDiagram, FaUsers, FaBriefcase } from "react-icons/fa";

/* 🔥 Professional Counter Component */
const Counter = ({ target, duration = 3000, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);

  // Trigger when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Running animation
  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startAnimation, target, duration]);

  return (
    <h3 ref={ref} className="stat-number">
      {count}
      {suffix}
    </h3>
  );
};

function StatsSection() {
  return (
     <section 
      className="stats"
      style={{ backgroundImage: `url(${contactImage})` }}
    >
        <h2 className="stats-heading">Achievements</h2>
      <div className="stats-container">
        <div className="stat-card">
          <FaProjectDiagram className="stat-icon" />
          <p className="stat-label">Business Registered</p>
          <Counter target={234} />
        </div>

        <div className="stat-card">
          <FaUsers className="stat-icon" />
          <p className="stat-label">Client Satisfaction</p>
          <Counter target={300} />
        </div>

        <div className="stat-card">
          <FaBriefcase className="stat-icons" />
          <p className="stat-label">Industry Experience</p>
          <Counter target={8} />
        </div>
      </div>
    </section>
  );
}

export default StatsSection;