import React, { useEffect, useState, useRef } from "react";
import "./Mentorship.css";

const mentors = [
  {
    name: "Ravi Sharma",
    role: "Academic Coach",
    quote: "Guiding students toward clarity and confidence.",
    image: "/assets/mentors/ravi.jpg",
  },
  {
    name: "Neha Verma",
    role: "Focus & Discipline Mentor",
    quote: "Helping learners build consistent study habits.",
    image: "/assets/mentors/neha.jpg",
  },
  {
    name: "Amit Desai",
    role: "Time Management Expert",
    quote: "Mastering time is mastering success.",
    image: "/assets/mentors/amit.jpg",
  },
];

 function Mentorship() {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);
  const timeoutRef = useRef(null);

  // cycle logic
  useEffect(() => {
    if (!hover) {
      timeoutRef.current = setTimeout(() => {
        setCurrent((c) => (c + 1) % mentors.length);
      }, 3500);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [current, hover]);

  const prev = () => setCurrent((c) => (c - 1 + mentors.length) % mentors.length);
  const next = () => setCurrent((c) => (c + 1) % mentors.length);

  return (
    <section
      className="mentorship-section"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="container">
        <h2 className="section-title">Mentorship Program</h2>
        <p className="section-subtitle">
          Learn directly from experienced mentors who understand your journey.
        </p>

        <div className="carousel-wrapper">
          {/* Prev / Next arrows */}
          <button className="nav-arrow left" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <div className="mentor-single">
            <div className="mentor-img-wrapper">
              <img
                src={mentors[current].image}
                alt={mentors[current].name}
                className="mentor-img"
              />
            </div>
            <h3>{mentors[current].name}</h3>
            <p className="mentor-role">{mentors[current].role}</p>
            <blockquote>"{mentors[current].quote}"</blockquote>
          </div>
          <button className="nav-arrow right" onClick={next} aria-label="Next">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="indicator-dots">
          {mentors.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${idx === current ? "active" : ""}`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>

        <ul className="mentorship-benefits">
          <li>One-on-One Guidance</li>
          <li>Weekly Check-ins</li>
          <li>Goal Tracking</li>
          <li>Motivational Support</li>
        </ul>

        <div className="mentorship-cta">
          <button
            className="cta-btn"
            onClick={() =>
              window.open("https://forms.gle/BGPyapwXKB9p4Jry6", "_blank")
            }
          >
            Join the Mentorship
          </button>
        </div>
      </div>
    </section>
  );
}
export default Mentorship;