import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Projects from "./Projects.jsx";
import GetQuote from "./GetQuote.jsx";
import ChooseUs from "./ChooseUs.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";
import Testimonial from "./Testimonial.jsx";
import Team from "./Team.jsx";
import Stats from "./Stats.jsx";

function LandingPage() {
  return (
    <>
      <div className=" ">
        <Nav />
        <Hero />
        <Stats />
        <About />
        <Service />
        <Projects />
        <ChooseUs />
        <GetQuote />
        <Form />
        <Team />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
