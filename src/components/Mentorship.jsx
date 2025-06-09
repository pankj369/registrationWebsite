import { useEffect, useState, useRef } from "react";
import "./Mentorship.css";

const mentors = [
  {
    name: "Abhishek Panjiyar",
    role: "Engineering career Mentor",
    quote: "IIT Delhi",
    image: "/images/abhsiehk_pfp.jpeg",
  },
  {
    name: "Anivesh Panjiyar",
    role: "Engineering career Mentor",
    quote: "IIIT Gwalior",
    image: "/images/anivesh_pfp.jpg",
  },
  {
    name: "CA Nishant Jha",
    role: "Commerce career Mentor",
    quote: "Chatered Accountant",
    image: "/images/nishant_pfp.jpg",
  },
  {
    name: "CA Prashant Jha",
    role: "Commerce career Mentor",
    quote: "Chatered Accountant",
    image: "/images/prashant.jpg",
  },
  {
    name: "Dr.Shyam Panjiyar",
    role: "Medical career Mentor",
    quote: "Doctor (M.B.B.S + M.D)",
    image: "/images/shyam_pfp.jpg",
  },
  {
    name: "Deepak Sharma",
    role: "Civil Engineering career Mentor",
    quote: "Construction Engineer",
    image: "/images/deepak.jpg",
  },
  {
    name: "Bibek Kumar Sah",
    role: "Engineering career Mentor",
    quote: "Entrepreneur",
    image: "/images/bivek.jpg",
  },
];

const MentorshipCarousel = () => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % mentors.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    const threshold = 50; // minimum distance for swipe

    if (deltaX > threshold) {
      // swipe left
      setCurrent((prev) => (prev + 1) % mentors.length);
    } else if (deltaX < -threshold) {
      // swipe right
      setCurrent((prev) => (prev - 1 + mentors.length) % mentors.length);
    }
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <section className="mentorship-section">
      <h2 className="mentorship-title">Meet Our Mentors</h2>
      <div
        className="carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {mentors.map((mentor, index) => (
            <div className="mentor-card" key={index}>
              <img
                src={mentor.image}
                alt={mentor.name}
                className="mentor-image"
              />
              <h3 className="mentor-name">{mentor.name}</h3>
              <p className="mentor-role">{mentor.quote}</p>
              <p className="mentor-role">{mentor.role}</p>
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
