import "./Location.css";
import locationImage from "../assets/location.jpg";

const Location = () => {
  return (
    <section className="location-section">
      <div className="location-header">
        <h2>📍 Our Locations</h2>
        <p>Visit our study space!</p>
      </div>

      <div className="location-wrapper">
        <div className="location-box">
          <h4>MargDarshak Library</h4>
          <p>
            Margdarshak Library near New Variety Readymade, Benta Chowk, VIP Road, Laheriasarai, Darbhanga
          </p>
          <div className="map-container">
            <a
              href="https://www.google.com/maps/place/Benta+Chowk,+Darbhanga,+Bihar+846001"
              target="_blank"
              rel="noopener noreferrer"
            >
             <img src={locationImage} alt="Library location" className="location" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
