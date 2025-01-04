import "./App.css";
import Navigation from "./Navigation/Navigation";
import Herosection from "./Herosection/Herosection";
import ChatBot from "./ChatBot/ChatBot";
import ServicesSection from "./ServicesSection/ServicesSection";
import FaqSection from "./FaqSection/FaqSection";
import AboutSection from "./AboutSection/AboutSection";
import PrecessSection from "./ProcessSection/PrecessSection";
export default function App() {
  return (
    <main>
      <div id="#home" className="home-page">
        <Navigation />
        <Herosection />
      </div>
      <AboutSection />
      <PrecessSection />
      <ServicesSection />
      <FaqSection />
      {/* <ChatBot /> */}
    </main>
  );
}