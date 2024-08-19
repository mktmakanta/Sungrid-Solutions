const projectsData = [
  {
    title: "Solar Installation",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-one",
  },
  {
    title: "Repair",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-three",
  },
  {
    title: "Solar Installation",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-one",
  },
  {
    title: " Installation",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-two",
  },
  {
    title: "Solar In",
    note: "Lor dolor sit amet consecteturunde  thdi shhhfhfh rhsuhytfyustsyusdfg wfwrutw7tqwryrepellendus voluptatem.",
    image: "hero-three",
  },
];

function Projects() {
  return (
    <>
      <section className=" font-inter">
        <div className=" px-4 text-center mt-14">
          <h1 className=" text-blue-900 font-bold text-xl ">PROJECTS</h1>

          <h4 className=" text-blue-900 text-3xl font-bold my-4">
            Our Recently Completed Projects.
          </h4>
          <p className=" text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            eius eligendi suscipit odit rerum quidem temporibus est impedit
            cumque tempore?
          </p>
        </div>
        <div className="projects">
          {/* project as singular  */}

          <div className="text-left my-4 overflow-x-scroll  w-full">
            <div className="flex  space-x-4 ">
              {projectsData.map((project, index) => (
                <div key={index} className="h-72 w-full  relative flex-none">
                  <img
                    src={`src/images/${project.image}.png`}
                    alt=""
                    className="h-full w-full"
                  />
                  <div className="absolute bottom-3 mx-4 px-2 border-l-4 border-amber-500">
                    <h2 className="font-bold text-white">{project.title}</h2>
                    <p className=" text-neutral-300">{project.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
