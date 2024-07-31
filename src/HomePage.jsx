function HomePage() {
  return (
    <>
      <section className="p-4 md:mt-4 lg:grid grid-cols-2">
        <div className="text-white lg:text-left lg:mt-5">
          <h6 className="text-teal-400 font-medium mt-6 md:text-xl uppercase">
            Work with the best and the right personnel
          </h6>
          <h1 className="text-7xl md:text-8xl  my-8">
            Your Happiness, Our Priority
          </h1>
          <p className="mb-8 md:text-xl text-slate-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore esequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="my-6 md:mx-8 lg:mx-0">
            <button className="bg-teal-400 md:mx-2 hover:bg-teal-500 lg:mx-0 text-white rounded-md md:text-lg md:py-4 md:px-10 font-medium mx-2 py-2 px-5">
              Get a Quote
            </button>

            <button className="border md:mx-2 hover:bg-teal-100/25 border-teal-400 md:py-4 md:px-10 md:text-lg  text-teal-400 font-medium rounded-md py-2 px-5">
              See our Works
            </button>
          </div>
        </div>
        <div className="lg:relative overflow-clip lg:flex items-center justify-center">
          <div className="p-4 lg:p-10 lg:rounded-lg  lg:absolute lg:h-full lg:w-full">
            <img
              src="src/images/hero-section/mobile-one.jpg"
              alt=""
              className="w-fit lg:rounded-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
