import React from "react";

export default function ChooseUs() {
  return (
    <div>
      <div className="p-4 font-inter py-10 md:px-14 lg:px-32 lg:py-20">
        <h1 className="text-amber-600 text-xl font-semibold">Why choose us?</h1>
        <h2 className="text-blue-900 text-3xl lg:text-4xl w-4/5 font-bold my-2">
          An exceptional quality that can't be beaten
        </h2>
        <p className="text-neutral-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet Lorem
          ipsum dolor sit amet. voluptatem natus facilis eos eum odio ad optio,
          eius fugiat suscipit.
        </p>
        <div className="space-y-2 md:space-y-4 lg:space-y-3 font-bold mt-5">
          <div className="flex gap-3 items-center">
            <div className="h-5 w-5  rounded-full">
              <img src="src/icons/checked.svg" alt="" />
            </div>{" "}
            Over 5 years of experience
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-5 w-5 rounded-full">
              <img src="src/icons/checked.svg" alt="" />
            </div>{" "}
            Guaranteed work
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-5 w-5  rounded-full">
              <img src="src/icons/checked.svg" alt="" />
            </div>{" "}
            40+ successfully executed projects
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-5 w-5  rounded-full">
              <img src="src/icons/checked.svg" alt="" />
            </div>{" "}
            Free consultation
          </div>
        </div>
      </div>
    </div>
  );
}
