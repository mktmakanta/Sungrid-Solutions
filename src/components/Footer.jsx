import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=" font-inter pt-8 text-white bg-gray-900 pb-3 ">
      <div className="  p-4 text-center py-12  bg-blue-900 ">
        <h2 className=" font-thin text-2xl lg:text-4xl">
          For more information please email
        </h2>
        <div>
          <a
            href="mailto:mktedozhigi@gmail.com?subject=Contact&body=Hello,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" py-4 px-10 font-light shadow-lg bg-amber-600 mt-6 lg:text-xl">
              Contact Us
            </button>
          </a>
        </div>
      </div>
      <div className=" p-4 text-neutral-400 lg:mt-20 lg:px-24 lg:grid grid-cols-2">
        <div className="  mt-10 lg:mt-0 ">
          <h2 className="font-bold text-xl text-white mb-3">Contacts</h2>
          <div className="flex items-center my-3">
            <div className="">
              <img className="inline mr-2" src="src/icons/phone.svg" alt="" />
              +234 8062 482 089
            </div>
          </div>
          <div className="flex items-center my-3">
            <div className="">
              {" "}
              <img className="inline mr-2" src="src/icons/sms.svg" alt="" />
              sungridsolutions@gmail.com
            </div>
          </div>
          <div className=" ">
            <div className="flex items-start my-3">
              <div className="w-5 h-5  mr-3 ">
                <img
                  className="inline mr-2"
                  src="src/icons/address.svg"
                  alt=""
                />
              </div>

              <div className="w-10/12">
                <span className="text-white font-bold"> Adddress 1:</span> Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                perspiciatis tempore nemo ipsum!{" "}
              </div>
            </div>
            <div className="flex items-start my-3 text-neutral-400">
              <div className="w-5 h-5  mr-3 ">
                {" "}
                <img
                  className="inline mr-2"
                  src="src/icons/address.svg"
                  alt=""
                />
              </div>

              <div className="w-10/12">
                <span className=" text-white font-bold"> Adddress 2:</span>{" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>
            </div>
          </div>
        </div>
        {/* social  */}
        <div className="text-white flex  gap-3 my-5 lg:self-end ">
          <svg
            className="h-10 w-10 p-2 rounded-full bg-white/20 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
          <div className="h-10 w-10 p-2 rounded-full bg-white/20 fill-white flex place-content-center">
            <img src="src/icons/instagram.svg" alt="" />
          </div>
          <svg
            className="h-10 w-10 p-2 rounded-full bg-white/20 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
          </svg>
          <svg
            className="h-10 w-10 p-2 rounded-full bg-white/20 fill-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </div>
        <div className="py-3 ">
          <h2 className="font-bold text-xl text-white mb-3 lg:mt-10">
            Quick Links
          </h2>
          <ul className="space-y-1">
            <li className="">
              <img className="inline mr-2" src="src/icons/arrow.svg" alt="" />
              About Us{" "}
            </li>
            <li>
              {" "}
              <img
                className="inline mr-2"
                src="src/icons/arrow.svg"
                alt=""
              />{" "}
              Our Services
            </li>
            <li>
              {" "}
              <img className="inline mr-2" src="src/icons/arrow.svg" alt="" />
              Our Projects
            </li>
          </ul>
        </div>
        <div className="brand lg:mt-8">
          <img
            className="h-28 w-40 lg:h-36 lg:w-48 my-"
            src="src/icons/footer-logo.svg"
            alt=""
          />
        </div>
      </div>
      <div className=" lg:text-center lg:px-24 items-end border-t-2  border-amber-600/20 text-neutral-400 lg:flex justify-between lg:mb-10 lg:pt-8">
        <div className="lg:flex flex-col items-start px-4 lg:px-0 ">
          {" "}
          <div className="  pt-7">
            &copy; Copyright {year} ||
            <span className="text-white">
              Sungrid Solutions Nigeria Limited
            </span>
          </div>
          <div className="my-3 pb-7 lg:pb-0 ">
            Registered (CAC). <span className="text-white">RC: 7166634</span>
          </div>
        </div>
        <div className="text-white text-center font-light text-sm mt-6 mb-6 lg:mb-0 ">
          Designed by MiM
        </div>
      </div>
    </div>
  );
}
