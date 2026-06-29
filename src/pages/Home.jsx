import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ImpactCalculator from "../components/ImpactCalculator";
import Initiatives from "../components/Initiatives";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Detect page refresh/reload
    const navigation = performance.getEntriesByType('navigation')[0];
    const isReload = navigation && navigation.type === 'reload';

    if (isReload) {
      if (window.location.hash) {
        // Strip the hash from URL without reloading
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
      return;
    }

    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  return (
    <div className="bg-[#f5f5f5] overflow-hidden">

      <Navbar />

      {/* HERO */}
      <div id="home">
        <Hero />
      </div>

      {/* SERVICES */}
      <div id="services">
        <Services />
      </div>

      {/* IMPACT */}
      <div id="impact">
        <ImpactCalculator />
      </div>

      {/* INITIATIVES */}
      <div id="initiatives">
        <Initiatives />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Home;