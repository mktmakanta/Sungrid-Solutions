import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="h-14 w-full lg:px-10 shadow-sm md:shadow-none md:py-6  sticky top-0 shadow-teal-600">
        <div className="">
          <img
            src="src/images/logo.png"
            alt=""
            className="h-12 w-8 absolute left-5"
          />
          <div className="absolute right-2">
            <button
              className=" md:hidden ml-auto mr-2 flex flex-col items-center justify-center w-10 h-10 space-y-1 bg-transparent border-none cursor-pointer"
              onClick={toggleMenu}
            >
              <span
                className={`block w-8 h-1 bg-teal-400 rounded-lg transition-transform duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-6 h-1 bg-teal-400 rounded-lg transition-opacity duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-teal-400 rounded-lg transition-transform duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

            {/* Mobile Menu */}
            <nav
              className={`absolute top-12 right-0 w-48 bg-white border  border-gray-300 h-screen shadow-lg transition-transform duration-300 ${
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

        <nav className="flex justify-end mx-4 lg:mx-8 self-center ">
          <ul className="hidden md:flex items-center text-white space-x-8 font-semibold">
            <li>
              <a href="#home" className="block  hover:text-gray-300">
                Home
              </a>
            </li>

            <li>
              <a href="#services" className="block  hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#works" className="block  hover:text-gray-300">
                Works
              </a>
            </li>

            <li>
              <a href="#contact" className="block  hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
