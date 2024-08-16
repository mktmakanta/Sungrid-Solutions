function OurService() {
  return (
    <>
      <section className="text-white md:mt-10 p-10">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl my-4">OUR SERVICES</h1>
          <div className="h-1 w-20 bg-teal-400  mx-auto"></div>
          <h4 className="  mt-6 md:my-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus, vel.
          </h4>
        </div>
        <div className="lg:flex flex-wrap ">
          <div className="text-left mb-10 lg:w-1/2 lg:p-6 ">
            <div className="h-96 ">
              <img
                src="src/images/hero-section/mobile-one.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h2 className="font-semibold md:text-3xl text-xl my-3">
              Solar installation
            </h2>
            <p className="text-slate-300 md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              cum quo praesentium esse, sint maiores unde sapiente nihil minus
              adipisci iusto ipsam, aliquid, velit nobis. Ea modi neque non
              corrupti.
            </p>
          </div>

          <div className="text-left mb-10 lg:w-1/2 lg:p-6">
            <div className="h-96">
              <img
                src="src/images/hero-section/mobile-two.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h2 className="font-semibold text-xl md:text-3xl my-3">
              Electricl installation
            </h2>
            <p className="text-slate-300 md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              cum quo praesentium esse, sint maiores unde sapiente nihil minus
              adipisci iusto ipsam, aliquid, velit nobis. Ea modi neque non
              corrupti.
            </p>
          </div>
          <div className="text-left mb-10 lg:w-1/2 lg:p-6">
            <div className="h-96">
              <img
                src="src/images/hero-section/mobile-three.jpg"
                alt=""
                className="h-full w-full"
              />
            </div>
            <h2 className="font-semibold text-xl md:text-3xl my-3">
              General Works
            </h2>
            <p className="text-slate-300 md:text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
              cum quo praesentium esse, sint maiores unde sapiente nihil minus
              adipisci iusto ipsam, aliquid, velit nobis. Ea modi neque non
              corrupti.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurService;
