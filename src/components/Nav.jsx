import React, { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="hidden lg:block h-10 w-screen bg-green-600"></div>
      <div className=" px-5 py-2 lg:px-32 md:flex justify-between items-center w-full sticky top-0 z-20 bg-white  ">
        <div className=" flex justify-between items-center">
          <div className=" w-32 ">
            <img src="src/icons/logo.svg" alt="" />
          </div>

          {/* mobile  */}
          <div className=" ">
            <button
              className=" md:hidden flex flex-col items-center justify-center w-10 h-10 space-y-1 bg-transparent border border-slate-300 rounded-md  cursor-pointer"
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
              className={` top-16 right-0 w-1/2 absolute bg-white border z-50   h-screen  transition-transform duration-300 ${
                isOpen ? "transform translate-x-0" : "hidden"
              }`}
            >
              <ul className="p-4 md:hidden text-center pt-12 space-y-8 font-semibold">
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
        <nav className="  ">
          <ul className="hidden md:flex items-center text-black space-x-14 font-semibold">
            <li>
              <a
                href="#home"
                className="block text-amber-600 hover:text-amber-600"
              >
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
