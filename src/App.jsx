import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import AboutSection from "./components/AboutSection";
import FaqSection from "./components/FaqSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";
import Menu from "./components/Menu";
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Header isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} handleMenuOpen={handleMenuOpen} />

      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <FaqSection />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
