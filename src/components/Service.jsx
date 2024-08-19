function Service() {
  return (
    <>
      <section className="  font-inter px-4 mt-20 ">
        <div className=" text-center space-y-3 mb-8">
          <h1 className="font-bold text-blue-900 text-xl">OUR SERVICES</h1>
          <h2 className="text-4xl font-bold text-blue-900">
            A comprehensive set of our services
          </h2>
          <h4 className="text-neutral-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, vel. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Cumque repellendus minima est
          </h4>
        </div>
        <div className="cards space-y-5">
          <div className="card w-11/12 mx-auto shadow-lg border-b-4 border-amber-600 pb-4">
            <div className="h-64 ">
              <img
                src="src/images/hero-one.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className=" relative p-8 ">
              <div className="h-20 w-20 bg-amber-600 absolute -top-12 p-3 ">
                <img src="src/icons/github.svg" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">
                Solar installation
              </h2>
              <p className=" text-neutral-400">
                Lorem ipsum dolor, sit amet consectetur Dolores cum quo
                praesentium esse,
              </p>

              <button className="font-medium border-b-2 text-amber-600 border-amber-600 border-spacing-0 mt-6">
                View service
              </button>
            </div>
          </div>
          <div className="card w-11/12 mx-auto shadow-lg  border-b-4 border-amber-600 pb-4">
            <div className="h-64 ">
              <img
                src="src/images/hero-three.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className=" relative p-8 ">
              <div className="h-20 w-20 bg-amber-600 absolute -top-12 p-3 ">
                <img src="src/icons/xtwitter.svg" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">
                Electrical Installation
              </h2>
              <p className=" text-neutral-400">
                Dolores cum quo praesentium esse, nihil minus adipisci iusto
                ipsam, aliquid, velit nobis. Ea m
              </p>

              <button className="font-medium border-b-2 text-amber-600 border-amber-600 border-spacing-0 mt-6 ">
                View service
              </button>
            </div>
          </div>
          <div className="card w-11/12 mx-auto shadow-lg  border-b-4 border-amber-600 pb-4">
            <div className="h-64 ">
              <img
                src="src/images/hero-two.png"
                alt=""
                className="h-full w-full"
              />
            </div>
            <div className=" relative p-8 ">
              <div className="h-20 w-20 bg-amber-600 absolute -top-12 p-3 ">
                <img src="src/icons/linkedin.svg" alt="" />
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-3">
                General Works
              </h2>
              <p className=" text-neutral-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. iusto
                ipsam, aliquid, velit nobis.
              </p>

              <button className="font-medium border-b-2 text-amber-600 border-amber-600 border-spacing-0 mt-6 ">
                View service
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
