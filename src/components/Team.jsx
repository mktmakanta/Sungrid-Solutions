const TeamData = [
  {
    name: "Muhamadd Iash",
    position: "Frontend Advocate",
    company:
      "lorem the countles readers have been helped by the famous that found parables",
    image: "hero-one",
    facebook: "link",
    twitter: "link",
    whatsapp: "link",
  },
  {
    name: "Muhamadd Iash",
    position: "Frontend Advocate",
    company:
      "lorem the countles readers have been helped by the famous that found parables",
    image: "hero-one",
    facebook: "link",
    twitter: "link",
    whatsapp: "link",
  },
  {
    name: "Muhamadd Iash",
    position: "Frontend Advocate",
    company:
      "lorem the countles readers have been helped by the famous that found parables",
    image: "hero-one",
    facebook: "link",
    twitter: "link",
    whatsapp: "link",
  },
  {
    name: "Muhamadd Iash",
    position: "Frontend Advocate",
    company:
      "lorem the countles readers have been helped by the famous that found parables",
    image: "hero-one",
    facebook: "link",
    twitter: "link",
    whatsapp: "link",
  },
];

import React, { useState } from "react";

export default function Team() {
  const [showLinks, setShowLinks] = useState(null);

  const onEnter = (index) => {
    setShowLinks(index);
  };
  const onLeave = () => {
    setShowLinks(null);
  };

  return (
    <section className="font-inter py-10 bg-amber-100/70 p-4">
      <div className="text-center my-5">
        <h1 className=" text-2xl font-bold text-amber-600"> Team</h1>
        <p className="text-neutral-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          accusantium nihil consequuntur, magnam laboriosam itaque.
        </p>
      </div>

      <div className="members ">
        {TeamData.map((team, index) => (
          <div
            key={index}
            className="member w-80 mx-auto mb-4 rounded-lg bg-white"
          >
            <div
              className="h-80 w-80  relative "
              onMouseEnter={() => {
                onEnter(index);
              }}
              onMouseLeave={onLeave}
            >
              {showLinks === index ? (
                <div
                  className={`absolute w-full  h-full bg-blue-500 rounded-t-lg flex items-center justify-center `}
                >
                  <ul className="flex">
                    <li className="w-10 h-10 rounded-full bg-white/70 m-2"></li>
                    <li className="w-10 h-10 rounded-full bg-white/70 m-2"></li>
                    <li className="w-10 h-10 rounded-full bg-white/70 m-2"></li>
                    <li className="w-10 h-10 rounded-full bg-white/70 m-2"></li>
                  </ul>
                </div>
              ) : (
                <img
                  className="w-full h-full rounded-t-lg"
                  src={`src/images/${team.image}.png`}
                  alt=""
                />
              )}
            </div>
            <div className="p-4">
              <h1 className="font-semibold text-2xl mt-2">{team.name}</h1>
              <h2 className=" text-neutral-600 my-1">{team.position}</h2>
              <p className="text-neutral-400">{team.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
