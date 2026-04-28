import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { ContactForm } from "./components/Contact";
import { Hero } from "./components/Hero";
import { OurServices } from "./components/OurServices";
import { CreativeFooter } from "./components/shared/Footer";
import { Navbar } from "./components/shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurServices />
      <ContactForm />
      <CreativeFooter />
    </div>
  );
}

export default App;
