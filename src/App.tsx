import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { ContactForm } from "./components/Contact";
import { Hero } from "./components/Hero";
import { OurServices } from "./components/OurServices";
import PwaHeader from "./components/pwa/PwaHeader";
import { PwaHero } from "./components/pwa/PwaHero";

function App() {
  return (
  <>
      {/* <Hero /> */}
      <PwaHeader />
      <PwaHero />
      {/* <AboutUs />
      <OurServices />
      <ContactForm /> */}
    </>
  );
}

export default App;
