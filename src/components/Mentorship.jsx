import React, { useEffect, useState } from "react";
import "./Mentorship.css";

const mentors = [
  {
    name: "Abhishek Panjiyar",
    role: "Engineering career Mentor",
    quote: "IIT Delhi",
    image: "student-library\images\abhsiehk_pfp.jpeg",
  },
  {
    name: "Anivesh Panjiyar",
    role: "Engineering career Mentor",
    quote: "IIIT Gwalior",
    image: "student-library\images\anivesh_pfp.jpg",
  },
  {
    name: "Nishant Jha",
    role: "Commerce career Mentor",
    quote: "Chatered Accountant",
    image: "student-library\images\nishant_pfp.jpg",
  },
  {
    name: "Bibek Kumar Sah",
    role: "Engineering career Mentor",
    quote: "Entrepreneur",
    image: "",
  },
  {
    name: "Deepak Sharma",
    role: "Civil Engineering career Mentor",
    quote: "Construction Engineer",
    image: "",
  },
  {
    name: "Shyam Panjiyar",
    role: "Doctor",
    quote: "M.B.B.S + M.D",
    image:"student-library\images\shyam_pfp.jpg",
  }
];

const MentorshipCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mentors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="mentorship-section">
      <h2 className="mentorship-title">Meet Our Mentors</h2>
      <div className="carousel-wrapper">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {mentors.map((mentor, index) => (
            <div className="mentor-card" key={index}>
              <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-role">{mentor.role}</p>
              <p className="mentor-quote">“{mentor.quote}”</p>
            </div>
          ))}
        </div>
        <div className="carousel-dots">
          {mentors.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active-dot" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipCarousel;
