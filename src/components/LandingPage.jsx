import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Projects from "./Projects.jsx";
import GetQuote from "./GetQuote.jsx";
import ChooseUs from "./ChooseUs.jsx";
import Form from "./Form.jsx";
import Testimonial from "./Testimonial.jsx";

function LandingPage() {
  return (
    <>
      <div className=" ">
        <Nav />
        <Hero />
        <About />
        <Service />
        <Projects />
        <ChooseUs />
        <GetQuote />
        <Form />
        <Testimonial />
      </div>
    </>
  );
}

export default LandingPage;
