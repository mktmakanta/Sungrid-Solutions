import React from "react";
import Projects from "../components/Projects";
import GetQuote from "../components/GetQuote";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";
import Service from "../components/Service";

export default function ServiceRoute() {
  return (
    <div>
      <Service />
      <Projects />
      <GetQuote />
      <Testimonial />
      <Footer />
    </div>
  );
}
