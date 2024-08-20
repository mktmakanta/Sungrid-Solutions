import React from "react";

export default function GetQuote() {
  return (
    <div className="h-80 bg-amber-600 font-inter flex flex-col justify-center items-center space-y-6">
      <h1 className="text-3xl font-bold text-white text-center ">
        Ready to pull the trigger? <br /> Get a free quote today.
      </h1>
      <div className=" space-x-5">
        <button className="px-8 py-5 bg-white text-amber-600 font-semibold">
          Get a quote
        </button>
        <button className="px-8 py-5 text-white border-2 border-white font-medium">
          Our services
        </button>
      </div>
    </div>
  );
}
