import React, { useEffect, useState } from "react";
import "./Mentorship.css";

const mentors = [
  {
    name: "Anjali Verma",
    role: "Career Coach",
    quote: "Helping students find the right path since 2010.",
    image: "https://via.placeholder.com/150x150?text=Anjali"
  },
  {
    name: "Rahul Sharma",
    role: "Study Strategist",
    quote: "Focus, plan, and achieve your academic goals.",
    image: "https://via.placeholder.com/150x150?text=Rahul"
  },
  {
    name: "Priya Desai",
    role: "Motivational Mentor",
    quote: "Inspiring the youth with positive thinking.",
    image: "https://via.placeholder.com/150x150?text=Priya"
  },
  {
    name: "Aman Gupta",
    role: "Competitive Exam Expert",
    quote: "Crack your exams with confidence and clarity.",
    image: "https://via.placeholder.com/150x150?text=Aman"
  },
  {
    name: "Sneha Joshi",
    role: "Time Management Coach",
    quote: "Master your minutes, master your life.",
    image: "https://via.placeholder.com/150x150?text=Sneha"
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
