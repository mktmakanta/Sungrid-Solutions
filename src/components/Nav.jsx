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
          <div className="h-32 w-24 md:h-32 md:w-24 absolute md:top-2 md:left-7 lg:left-32 left-5">
            <img src="src/icons/logo.svg" alt="" />
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
