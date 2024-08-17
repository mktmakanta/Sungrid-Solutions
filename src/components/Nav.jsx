import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-14 p-1 md:flex justify-between items-baseline w-full lg:px-10 shadow-lg shadow-neutral-200/50 md:shadow-none md:py-6 bg-white z-50 sticky top-0 ">
        <div className="">
          <div className="h-12 w-8 md:h-16 md:w-12 absolute md:top-2 md:left-7 lg:left-32 left-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 155.53 228.41"
            >
              <defs>
                <style>
                  {`
            .cls-1 { fill: url(#radial-gradient); }
            .cls-2 { fill: url(#linear-gradient); }
            .cls-3 { fill: url(#linear-gradient-2); }
          `}
                </style>
                <radialGradient
                  id="radial-gradient"
                  cx="91.74"
                  cy="26.66"
                  r="26.66"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#fffa21" />
                  <stop offset="1" stopColor="#ff950e" />
                </radialGradient>
                <linearGradient
                  id="linear-gradient"
                  x1="29.98"
                  y1="156.18"
                  x2="114.93"
                  y2="9.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#7cb9e8" />
                  <stop offset="1" stopColor="#00308f" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="155.53"
                  y1="153.82"
                  x2="9.74"
                  y2="153.82"
                  xlinkHref="#linear-gradient"
                />
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <circle className="cls-1" cx="91.74" cy="26.66" r="26.66" />
                  <path
                    className="cls-2"
                    d="M15.67,92.8,71.73,49.59c12.44,10,30.31,9,41-1.77,9.74-9.8,11.46-25.63,3.77-37.89l23.93,30.58c2.44,3.12,5.63,8.3,4.65,14-.86,5-4.58,8.17-6.2,9.52-8.63,7.21-48.19,36.76-103.14,78.41-2.1,1.35-5,4.09-5.87,6.89-1.14,3.57,1.09,6.81.67,7.09-.64.43-6.38-6.35-27.48-35.89-3.61-5.25-3.11-9.35-2.88-10.63.68-3.77,3.18-6.2,7.76-10.64A63.31,63.31,0,0,1,15.67,92.8Z"
                  />
                  <path
                    className="cls-3"
                    d="M155.47,125.15c-.51,5.18-4.44,8.72-6.42,10.41-8.31,7.07-48.3,37.71-103.47,78.87-3,2.66-5,3.44-5.76,6.65-.91,3.83,1.5,7,1.11,7.31-.58.4-6.5-6.41-29-36.78-1.49-2.94-2.87-7-1.77-11.3a15.67,15.67,0,0,1,5.53-8c11-8.16,48.55-36.59,105.54-79.53A11.23,11.23,0,0,0,125.56,87c1.5-4.33-1.71-7.5-1.27-7.79s6.78,8.32,27.42,35C153.59,116.73,155.92,120.62,155.47,125.15Z"
                  />
                </g>
              </g>
            </svg>
          </div>
          {/* mobile  */}
          <div className="absolute right-2">
            <button
              className=" md:hidden ml-auto mr-2 flex flex-col items-center justify-center w-10 h-10 space-y-1 bg-transparent border-none cursor-pointer"
              onClick={toggleMenu}
            >
              <span
                className={`block w-8 h-1 bg-neutral-900 rounded-lg transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-1 bg-neutral-900 rounded-lg transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-neutral-800 rounded-lg transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

            {/* Mobile Menu */}
            <nav
              className={`absolute top-12 right-0 w-48 bg-white border z-50  border-gray-300 h-screen shadow-lg transition-transform duration-300 ${
                isOpen ? "transform translate-x-0" : "hidden"
              }`}
            >
              <ul className="p-4 md:hidden space-y-8 font-semibold">
                <li>
                  <a
                    href="#home"
                    className="block text-gray-800 hover:text-gray-600"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#services"
                    className="block text-gray-800 hover:text-gray-600"
                  >
                    Our Services
                  </a>
                </li>

                <li>
                  <a
                    href="#recent"
                    className="block text-gray-800 hover:text-gray-600"
                  >
                    Recent Works
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="block text-gray-800 hover:text-gray-600"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="block text-gray-800 hover:text-gray-600"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block text-gray-800 hover:text-gray-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* tablet and large screens */}
        <nav className="md:right-8 lg:right-16 md:top-7 absolute flex justify-end mx-4 lg:mx-8 self-center ">
          <ul className="hidden md:flex items-center text-black space-x-8 font-semibold">
            <li>
              <a href="#home" className="block  hover:text-amber-600">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="block  hover:text-amber-600">
                Services
              </a>
            </li>
            <li>
              <a href="#works" className="block  hover:text-amber-600">
                Works
              </a>
            </li>

            <li>
              <a href="#contact" className="block hover:text-amber-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
