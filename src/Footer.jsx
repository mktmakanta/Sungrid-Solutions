import React from "react";
import Social from "./Social";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className=" font-inter pt-8  text-white bg-[url('src/images/footer-background.jpg')]  bg-cover bg-center ">
      <div className=" w-full p-10 lg:p-20  bg-blue-900 flex flex-col place-content-center">
        <h2 className="font-extralight text-xl">
          For more information please email
        </h2>
        <div>
          <a
            href="mailto:mktedozhigi@gmail.com?subject=Contact&body=Hello,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className=" bg-amber-600 hover:bg-amber-500 shadow-md py-2 px-8 mt-5 text-xl font-light rounded-sm">
              Contact Us
            </button>
          </a>
        </div>
      </div>
      <div className="text-left pl-4 pt-4 mb-4 md:px-10  lg:grid grid-cols-2 lg:p-20 ">
        <div className=" space-y-4  ">
          <div>
            <img src="" alt="" />
            <p className="font-light text-xl my-2">+234 8062 482 089</p>
          </div>
          <div>
            <img src="" alt="" />
            <p className="font-light text-xl my-3">
              sungridsolutions@gmail.com
            </p>
          </div>
          <div className="font-light my-4 ">
            <div className="lg:mt-10">
              <span className="text-amber-500 font-semibold"> Adddress 1:</span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              perspiciatis tempore nemo ipsum!{" "}
            </div>
            <div className="lg:mt-5">
              <span className="text-amber-500 font-semibold"> Adddress 2:</span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              obcaecati temporibus similique ullam doloribus d
            </div>
          </div>
        </div>

        <div className=" lg:ml-14">
          <div className="brand my-4">
            <img
              className="h-24 w-16 mb-1"
              src="src/images/footer-logo.png"
              alt=""
            />
            SUNGRID SOLUTIONS NIGERIA LIMITED
          </div>
          <div className="font-light">&copy; COPYRIGHT {year}</div>
          <div className="font-light">REGISTERED (CAC). RC: 7166634</div>
          <div className="md:mt-10 ">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
