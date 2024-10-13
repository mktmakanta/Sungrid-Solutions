import React from "react";

const stats = [
  {
    count: 120,
    activity: "Happy customers",
    note: "Lorem ipsum dolor sit ansectetur adipisicings voluptatem.",
    icon: "customer",
  },
  {
    count: 59,
    activity: "Projects Done",
    note: "Lorem ipsum dolor sit amet consectetuue unde repellendus atem.",
    icon: "project",
  },
  {
    count: 17,
    activity: "Award Wins",
    note: "Lorem ipsum dolor sit amet cpellendus voluptatem.",
    icon: "award",
  },
  {
    count: 10,
    activity: "Expert Works",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh voluptatem.",
    icon: "experts",
  },
];

export default function Stats() {
  return (
    <div className="w-10/12  mx-auto font-inter space-y-5 relative  -top-14 divide-y-2 divide-slate-500/15 lg:flex lg:-top-24 lg:items-baseline shadow-md lg:justify-center  ">
      {stats.map((stat, index) => (
        <div key={index} className=" flex bg-white p-4 py-8">
          <div className="image h-12 w-12  p-2 bg-sky-500 rounded-sm mr-4">
            <img
              src={`/icons/${stat.icon}.svg`}
              className="w-full h-full fill-white "
              alt=""
            />
          </div>
          <div className="text space-y-3">
            <h1 className="text-4xl font-bold text-blue-900">{stat.count}</h1>
            <h2 className="font-bold text-xl text-blue-900">{stat.activity}</h2>
            <p className=" w-56 text-neutral-400 font-light">{stat.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
