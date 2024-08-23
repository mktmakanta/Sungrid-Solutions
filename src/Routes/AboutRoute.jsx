import React from "react";
import Stats from "../components/Stats";
import About from "../components/About";
import Team from "../components/Team";
import Footer from "../components/Footer";
import RouteIntro from "../components/RouteIntro";

export default function AboutRoute() {
  return (
    <div>
      <RouteIntro />
      <Stats />
      <About />
      <Team />
      <Footer />
    </div>
  );
}
