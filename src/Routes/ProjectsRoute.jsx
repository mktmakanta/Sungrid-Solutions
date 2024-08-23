import React from "react";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import RouteIntro from "../components/RouteIntro";

export default function ProjectsRoute() {
  return (
    <div>
      <RouteIntro />
      <Projects />
      <Footer />
    </div>
  );
}
