import React from "react";
import { NavLink } from "react-router-dom";

export default function RouteIntro({ value }) {
  return (
    <div className="h-96 w-screen lg:h-2/4  relative">
      <NavLink
        className="absolute top-4 left-5 font-semibold px-5 py-2 bg-amber-600 text-white text-xl flex items-center"
        to="/"
      >
        {" "}
        <img className="mr-2" src="src/icons/go-home.svg" alt="" />
        Home
      </NavLink>
      <img className="h-full w-full" src="src/images/hero-two.png" alt="" />
      <div className=" font-medium absolute bottom-1/3 left-5">
        Home / Pages / {value}
      </div>
    </div>
  );
}
