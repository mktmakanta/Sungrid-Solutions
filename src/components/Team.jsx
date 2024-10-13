const TeamData = [
  {
    name: "Philip Liam",
    position: "C.E.O",
    company:
      "lorem the countles readers have been helped by the famous that found parables",
    image: "hero-one",
    facebook: "link",
    twitter: "link",
    whatsapp: "link",
  },
  {
    name: "Aliyu Muhammad",
    position: "Frontend Advocate",
    company:
      "lorem the countles readers have been helped by the famous that found parables",
    image: "hero-two",
    facebook: "link",
    twitter: "link",
    whatsapp: "link",
  },
  {
    name: "Micheal Solomon",
    position: "Sottware Engineer",
    company:
      "lorem the countles readers have been helped by lorem the famous that found parables",
    image: "hero-three",
    facebook: "link",
    twitter: "link",
    whatsapp: "link",
  },
  {
    name: "Juliet OWan",
    position: "Technical Supervisor",
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
    <section className="font-inter py-10 bg-amber-100/70 p-4 md:px-10">
      <div className="text-center my-5">
        <h1 className=" text-2xl font-bold text-amber-600 lg:text-3xl">
          {" "}
          Team
        </h1>
        <p className="text-neutral-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
          accusantium nihil consequuntur, magnam laboriosam itaque.
        </p>
      </div>

      <div className="members md:grid md:grid-cols-2 lg:grid-cols-4 lg:mt-16 lg:px-12">
        {TeamData.map((team, index) => (
          <div
            key={index}
            className="member w-80 mx-auto mb-4 rounded-lg bg-white"
          >
            <div
              className="h-72 w-80  relative duration-500"
              onMouseEnter={() => {
                onEnter(index);
              }}
              onMouseLeave={onLeave}
            >
              {showLinks === index ? (
                <div
                  className={`absolute w-full  h-full bg-blue-500 rounded-t-lg flex items-center justify-center `}
                >
                  <div className="flex gap-2">
                    <svg
                      className="h-10 w-10 p-2 rounded-full bg-white/20 hover:bg-white/40 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                    <div className="h-10 w-10 p-2 rounded-full bg-white/20 hover:bg-white/40 fill-white flex place-content-center">
                      <img src="/icons/instagram.svg" alt="" />
                    </div>
                    <svg
                      className="h-10 w-10 p-2 rounded-full bg-white/20 hover:bg-white/40 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                    </svg>
                    <svg
                      className="h-10 w-10 p-2 rounded-full bg-white/20 hover:bg-white/40 fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <img
                  className="w-full h-full rounded-t-lg"
                  src={`/images/${team.image}.png`}
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
