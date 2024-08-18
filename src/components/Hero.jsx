import { useEffect, useState } from "react";

const heroData = [
  {
    heading: "SUNGRID SOLUTIONS",
    description:
      "Lorem ipsum dolor sit amet consectetuias quam molestias,  gherhehehhg the ththehher urhhhfdhfhhdshdshhsdhhshshhfh fhh n feubrbeuewwe eeherbhehukuwef befewguefguefbnyggy wexuc   rruiuigecycyw  t",
    picture: "hero-one",
  },
  {
    heading: "MISSION",
    description:
      "Lorem ipsum dolor sit amet consectetuias quam molestias,  gherhehehhg the ththehher urhhhfdhfhhdshdshhsdhhshshhfh fhh n feubrbeuewwe eeherbhehukuwef befewguefguefbnyggy wexuc   rruiuigecycyw  t",
    picture: "hero-two",
  },
  {
    heading: "VISION",
    description:
      "Lorem ipsum dolor sit amet consectetuias quam molestias, praesentium fugi this a ththehher urhhhfdhfhhdshdshhsdhhshshhfh fhh n feubrbeuewwe eeherbhehukuwef befewguefguefbnyggy wexuc   rruiuigecycyw  t",
    picture: "hero-THREE",
  },
];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 3000);
    return clearInterval(interval);
  }, []);

  return (
    <>
      <div className="wrapper w-full  overflow-x-scroll">
        <div className=" cards flex  ">
          {heroData.map((hero, currentImage) => (
            <div
              key={currentImage}
              style={{
                backgroundImage: `url(src/images/${hero[currentImage].picture}.png)`,
              }}
              className="card relative  h-96 lg:h-screen w-full  flex-shrink-0  bg-center bg-cover "
            >
              <div className="absolute  font-inter  top-1/3 left-5 lg:left-20 lg:top-1/2 mt-2 ">
                <h1 className="text-blue-950 font-extrabold lg:text-7xl text-5xl">
                  {hero[currentImage].heading}
                </h1>
                <p className=" text-white lg:w-2/3 pr-4 font-extralight md:font-normal">
                  {hero[currentImage].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
