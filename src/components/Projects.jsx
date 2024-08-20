import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Solar Installation",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-one",
  },
  {
    id: 2,

    title: "Repair",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-three",
  },
  {
    id: 3,
    title: "Solar Installation",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-one",
  },
  {
    id: 4,

    title: " Installation",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-two",
  },
  {
    id: 5,
    title: "Solar In",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-three",
  },
];

function Projects() {
  const [screenImage, setScreenImage] = useState(0);

  const nextImage = () => {
    if (screenImage === projectsData.length - 1) {
      setScreenImage(0);
    } else {
      setScreenImage(screenImage + 1);
    }
  };
  const previousImage = () => {
    if (screenImage === 0) {
      setScreenImage(projectsData.length - 1);
    } else {
      setScreenImage(screenImage - 1);
    }
  };

  return (
    <>
      <section className=" font-inter">
        <div className=" px-4 text-center mt-14">
          <h1 className=" text-amber-600 font-bold text-xl "> Past Projects</h1>

          <h4 className=" text-blue-900 text-3xl font-bold my-4">
            Our Recently Completed Projects.
          </h4>
          <p className=" text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            eius eligendi suscipit odit rerum quidem temporibus est impedit
            cumque tempore?
          </p>
        </div>
        <div className="projects relative">
          {/* project as singular  */}

          <div className="text-left mt-4  w-full">
            <div className="flex  space-x-4 ">
              <div
                key={projectsData[screenImage].id}
                className="h-80 w-full  relative flex-none"
              >
                <img
                  src={`src/images/${projectsData[screenImage].image}.png`}
                  alt=""
                  className="h-full w-full"
                />
                <div className="absolute bottom-3 mx-4 px-2 border-l-4 border-amber-500">
                  <h2 className="font-bold text-white">
                    {projectsData[screenImage].title}
                  </h2>
                  <p className=" text-neutral-300">
                    {projectsData[screenImage].note}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="absolute top-1/2 left-6 w-10 h-10 rounded-full bg-white/50"
            onClick={previousImage}
          ></button>
          <button
            className="absolute top-1/2 right-6 w-10 h-10 rounded-full bg-white/50"
            onClick={nextImage}
          ></button>
        </div>
      </section>
    </>
  );
}

export default Projects;
