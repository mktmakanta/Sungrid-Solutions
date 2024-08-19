import { useEffect, useState, useRef } from "react";

const heroData = [
  {
    heading: "SUNGRID SOLUTIONS",
    description:
      "Lorem ipsum dolor sit amet consectetuias quam molestias, gherhehehhg the ththehher urhhhfdhfhhdshdshhsdhhshshhfh fhh n feubrbeuewwe eeherbhehukuwef befewguefguefbnyggy wexuc rruiuigecycyw t",
    picture: "hero-one",
  },
  {
    heading: "MISSION",
    description:
      "Lorem ipsum dolor sit amet consectetuias quam molestias, gherhehehhg the ththehher urhhhfdhfhhdshdshhsdhhshshhfh fhh n feubrbeuewwe eeherbhehukuwef befewguefguefbnyggy wexuc rruiuigecycyw t",
    picture: "hero-two",
  },
  {
    heading: "VISION",
    description:
      "Lorem ipsum dolor sit amet consectetuias quam molestias, praesentium fugi this a ththehher urhhhfdhfhhdshdshhsdhhshshhfh fhh n feubrbeuewwe eeherbhehukuwef befewguefguefbnyggy wexuc rruiuigecycyw t",
    picture: "hero-three",
  },
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const scrollContain = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 8000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const scrollNextImage = (index) => {
    if (scrollContain.current) {
      const scrollWidth = scrollContain.current.scrollWidth / heroData.length;
      scrollContain.current.scrollTo({
        left: scrollWidth * index,
        behaviour: "smooth",
      });
    }
  };

  return (
    <div
      className="wrapper w-full overflow-x-scroll relative"
      ref={scrollContain}
    >
      <div className="cards flex ">
        {heroData.map((hero, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(src/images/${hero.picture}.png)`,
            }}
            className={`card relative h-96 lg:h-screen w-full flex-shrink-0 bg-center bg-cover ${
              currentImage === index ? "block" : "hidden"
            }`}
          >
            <div className="absolute font-inter top-1/3 left-5 lg:left-20 lg:top-1/2 mt-2">
              <h1 className="text-blue-950 font-extrabold lg:text-7xl text-5xl">
                {hero.heading}
              </h1>
              <p className="text-white lg:w-2/3 pr-4 font-light md:font-normal">
                {hero.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="  absolute bottom-4 flex space-x-3 right-6">
        <div
          className={`h-7 w-7 rounded-full ${
            currentImage === 0 ? "scale-150" : ""
          }`}
        >
          <img
            className="h-full w-full rounded-full shadow-xl shadow-white"
            src={`src/images/${heroData[0].picture}.png`}
            alt=""
          />
        </div>
        <div
          className={`h-7 w-7 rounded-full ${
            currentImage === 1 ? "scale-150" : ""
          }`}
        >
          <img
            className="h-full w-full rounded-full shadow-xl shadow-white"
            src={`src/images/${heroData[1].picture}.png`}
            alt=""
          />
        </div>{" "}
        <div
          className={`h-7 w-7 rounded-full shadow-xl shadow-white ${
            currentImage === 2 ? "scale-150" : ""
          }`}
        >
          <img
            className="h-full w-full rounded-full"
            src={`src/images/${heroData[2].picture}.png`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
