import React from "react";
import Stats from "./Stats";
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className="font-inter px-4 lg:grid grid-cols-2 lg:px-0">
      <div className="h-80 lg:h-full">
        <img className="h-full" src="src/images/hero-three.png" alt="" />
      </div>
      <div className="px-4 text-center lg:text-left lg:px-14 mt-8 ">
        <h1 className="font-bold text-amber-600 text-xl my-4 lg:my-2">
          About Us
        </h1>
        <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 ">
          5+ Years Experience In Solar & Renewable Energy Industry
        </h2>
        <p className="text-neutral-400 my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          autem sequi sint vel voluptas quam atque dolorem minus? Molestias
          exercitationem iusto eos necessitatibus modi corporis itaque qui, rem
          corrupti explicabo! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A, voluptatibus!
        </p>

        <NavLink to="/aboutroute">
          <button className="text-2xl border py-4 px-10 mt-8 bg-amber-600 text-white shadow-lg">
            Explore More
          </button>
        </NavLink>
      </div>
    </div>
  );
}
