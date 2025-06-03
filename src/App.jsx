import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Mentorship from "./components/Mentorship";
import RegistrationForm from "./components/RegistrationForm";
import Location from "./components/Location";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <Mentorship />
      <RegistrationForm />
      <Location/>
      <Footer/>
    </>
  );
}

export default App;