import React from "react";
import { NavLink } from "react-router-dom";

export default function ErrorRoute() {
  return (
    <div className="bg-[url('src/images/Error-page.png')] bg-center h-screen bg-cover relative">
      <NavLink
        to="/"
        className="hover:bg-amber-500 animate-pulse rounded-md bg-amber-400 text-white px-4 py-2 text-xl absolute bottom-24  left-1/2 -translate-x-1/2"
      >
        <img className="inline mr-3 " src="src/icons/go-home.svg" alt="" />
        Go back home
      </NavLink>
    </div>
  );
}
