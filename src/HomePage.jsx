function HomePage() {
  return (
    <>
      <section className="relative p-6 font-inter md:mt-8 lg:mt-16 lg:pl-32  lg:pb-10 lg:grid grid-cols-2">
        <div className="lg:ml-10 font-semibold lg:text-left lg:mt-6 md:space-y-8 lg:space-y-4">
          <h6 className=" font-medium text-amber-600 lg:font-normal mt-10 lg:mt-7 md:text-xl uppercase">
            Work with the best and the right personnel
          </h6>
          <h1 className="text-7xl md:text-8xl lg:text-8xl my-8">
            Your <span className="text-amber-600">Happiness,</span> Our Priority
          </h1>
          <p className="mb-8 md:text-xl lg:text-base font-light text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore esequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="my-6 md:mx-8 lg:mx-0">
            <button className="bg-amber-600 md:mx-2 shadow-lg hover:bg-amber-500 lg:mx-0 text-white rounded-md md:text-lg md:py-4 md:px-10 lg:py-2 lg:px-6 font-normal  mx-2 py-2 px-5">
              Get a Quote
            </button>

            <button className="border md:mx-2 hover:bg-amber-500 border-amber-600 md:py-4 md:px-10 md:text-lg lg:py-2 lg:px-6  text-amber-500 hover:text-white font-normal rounded-md py-2 px-5">
              See our Works
            </button>
          </div>
        </div>
        <div className=" hidden lg:block overflow-clip  rounded-md absolute right-24 bottom-4 ">
          <img
            src="src/images/hero-section/mobile-five.jpg"
            alt=""
            className=" rounded-md w-96"
          />
        </div>
        <div className=" overflow-clip md:mt-10 lg:ml-10 lg:mt-4 z-30 rounded-md place-self-cente ">
          <img
            src="src/images/hero-section/mobile-one.jpg"
            alt=""
            className=" rounded-md w-full lg:w-64"
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;
