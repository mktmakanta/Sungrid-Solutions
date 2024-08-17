function HomePage() {
  return (
    <>
      <section className="relative p-6  md:mt-8 lg:pl-32 lg:mt-0 lg:pb-10 lg:grid grid-cols-2">
        <div className="text-white lg:text-left lg:mt-6 md:space-y-8 lg:space-y-4">
          <h6 className="text-teal-300 font-medium lg:font-normal mt-10 md:text-xl uppercase">
            Work with the best and the right personnel
          </h6>
          <h1 className="text-7xl md:text-8xl lg:text-8xl my-8">
            Your Happiness, Our Priority
          </h1>
          <p className="mb-8 md:text-xl lg:text-base text-slate-300 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore esequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="my-6 md:mx-8 lg:mx-0">
            <button className="bg-teal-400 md:mx-2 hover:bg-teal-500 lg:mx-0 text-white rounded-md md:text-lg md:py-4 md:px-10 lg:py-2 lg:px-6 font-medium lg:font-normal mx-2 py-2 px-5">
              Get a Quote
            </button>

            <button className="border md:mx-2 hover:bg-teal-100/25 border-teal-400 md:py-4 md:px-10 md:text-lg lg:py-2 lg:px-6  text-teal-400 font-medium lg:font-normal rounded-md py-2 px-5">
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
        <div className=" overflow-clip lg:ml-10 lg:pt-4 z-30 rounded-md place-self-cente ">
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
