import "./App.css";
import { AboutUs } from "./components/AboutUs";
import { ContactForm } from "./components/Contact";
import { Hero } from "./components/Hero";
import { OurServices } from "./components/OurServices";

function App() {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurServices />
      <ContactForm />
    </>
  );
}

export default App;
