import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import About from "./About.jsx";

function LandingPage() {
  return (
    <>
      <div className=" ">
        <Nav />
        <Hero />
        <About />
      </div>
    </>
  );
}

export default LandingPage;
