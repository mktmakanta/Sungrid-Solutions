import React from "react";
import Projects from "../components/Projects";
import GetQuote from "../components/GetQuote";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Service from "../components/Service";
import RouteIntro from "../components/RouteIntro";

export default function ServiceRoute() {
  return (
    <div>
      <RouteIntro value={"Service"} />
      <Service />
      <Projects />
      <GetQuote />
      <Testimonial />
      <Footer />
    </div>
  );
}
