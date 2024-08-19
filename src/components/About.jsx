import React from "react";
import Stats from "./Stats";

export default function About() {
  return (
    <div className="font-inter px-4">
      <Stats />
      <div className="h-80">
        <img className="h-full" src="src/images/hero-three.png" alt="" />
      </div>
      <div className="px-4 text-center mt-8 ">
        <h1 className="font-bold text-blue-900 text-2xl my-4">About Us</h1>
        <h2 className="text-3xl font-bold text-blue-900 ">
          5+ Years Experience In Solar & Renewable Energy Industry
        </h2>
        <p className="text-neutral-400 my-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          autem sequi sint vel voluptas quam atque dolorem minus? Molestias
          exercitationem iusto eos necessitatibus modi corporis itaque qui, rem
          corrupti explicabo! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. A, voluptatibus!
        </p>

        <button className="text-2xl border py-4 px-10 mt-8 border-black/45">
          Explore More
        </button>
      </div>
    </div>
  );
}
