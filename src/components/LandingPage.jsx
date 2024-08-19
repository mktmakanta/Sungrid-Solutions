import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Projects from "./Projects.jsx";

function LandingPage() {
  return (
    <>
      <div className=" ">
        <Nav />
        <Hero />
        <About />
        <Service />
        <Projects />
      </div>
    </>
  );
}

export default LandingPage;
