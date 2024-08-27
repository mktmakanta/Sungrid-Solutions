import { NavLink } from "react-router-dom";

function Service() {
  return (
    <>
      <section className="  font-inter px-4 mt-20 lg:mt-32 md:px-24 lg:px-40">
        <div className=" text-center space-y-3 mb-8">
          <h1 className="font-bold text-amber-600 text-xl">Our Services</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
            A comprehensive set of our services
          </h2>
        </div>
        <div className="cards space-y-5 lg:space-y-0 lg:flex lg:gap-10  lg:mt-16">
          <div className="card w-11/12 mx-auto shadow-lg border-b-4 border-amber-600 pb-4">
            <div className="h-64 md:h-96 lg:h-64 flex place-content-center">
              <img
                src="src/images/hero-one.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className=" relative p-8 ">
              <div className="h-20 w-20 bg-amber-600 absolute -top-12 p-3 ">
                <img className="h-16 w-16" src="src/icons/solar.svg" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">
                Solar installation
              </h2>
              <p className=" text-neutral-400 mb-6">
                Lorem ipsum dolor, sit amet consectetur Dolores cum quo
                praesentium esse,
              </p>

              <NavLink
                to="/serviceroute"
                className="font-medium border-b-2 text-amber-600 mt-6 underline-offset-2 underline"
              >
                View service{" "}
                <img
                  className="h-3 w-3 ml-2 inline"
                  src="src/icons/link.svg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div className="card w-11/12 mx-auto shadow-lg  border-b-4 border-amber-600 pb-4">
            <div className="h-64 md:h-96 lg:h-64 flex place-content-center">
              <img
                src="src/images/hero-three.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className=" relative p-8 ">
              <div className="h-20 w-20 bg-amber-600 absolute -top-12 p-3  ">
                <img
                  className="h-16 w-16"
                  src="src/icons/electrical.svg"
                  alt=""
                />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">
                Electrical Installation
              </h2>
              <p className=" text-neutral-400 mb-6">
                Dolores cum quo praesentium esse, nihil minus adipisci iusto
                ipsam, aliquid, velit nobis. Ea m
              </p>
              <NavLink
                to="/serviceroute"
                className="font-medium border-b-2 text-amber-600 mt-6 underline-offset-2 underline"
              >
                View service{" "}
                <img
                  className="h-3 w-3 ml-2 inline"
                  src="src/icons/link.svg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
          <div className="card w-11/12 mx-auto shadow-lg  border-b-4 border-amber-600 pb-4">
            <div className="h-64 md:h-96 lg:h-64 ">
              <img
                src="src/images/hero-two.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className=" relative p-8 ">
              <div className="h-20 w-20 bg-amber-600 absolute -top-12 p-3 flex place-content-center">
                <img className="h-16 w-16" src="src/icons/general.svg" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">
                General Works
              </h2>
              <p className=" text-neutral-400 mb-6">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto
                ipsam, aliquid, velit nobis.
              </p>

              <NavLink
                to="/serviceroute"
                className="font-medium border-b-2 text-amber-600 mt-6 underline-offset-2 underline"
              >
                View service{" "}
                <img
                  className="h-3 w-3 ml-2 inline"
                  src="src/icons/link.svg"
                  alt=""
                />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
