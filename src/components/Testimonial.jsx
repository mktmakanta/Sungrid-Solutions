const testimonialData = [
  {
    image: "hero-two",
    work: "Bumpa Electrification",
    place: "Mr. Wang Park",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elincidunt nobis eveniet voluptatibtas, omnis sint? Loreipsum dolor sit amet consectetur. Lorem ipsum dolor sit.",
  },
  {
    image: "hero-two",
    work: "Solar Electrification",
    place: "Mr. Wang Park",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicin omnis sintsit amet consectetur. Lorem ipsum dolor sit.",
  },
  {
    image: "hero-two",
    work: " Electrification",
    place: "Alhaji Isah House",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elincidunt nobis esit amet consectetur. Lorem ipsum dolor sit.",
  },
  {
    image: "hero-two",
    work: "Repairs and maintainance",
    place: "Mr. Ben Company",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elincidunt nobis eveniet voluptatibipsum dolorur. Lorem ipsum dolor sit.",
  },
  {
    image: "hero-two",
    work: "Repairs and maintainance",
    place: "Mr. Ben Company",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elincidunt nobis eveniet voluptatibipsum dolorur. Lorem ipsum dolor sit.",
  },
];

function Testimonial() {
  return (
    <>
      <section className="p-4 bg-amber-100/70 font-inter lg:px-32">
        <h1 className="text-center text-amber-600 text-xl font-bold mt-6">
          Testimonials
        </h1>
        <h2 className="text-3xl lg:text-4xl text-blue-900 text-center font-bold mt-4 mb-6">
          Find out what our clients say about us and our work!
        </h2>
        <div className="testimonials lg:grid grid-cols-3 gap-3 lg:my-14">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial p-4 bg-white rounded-lg mb-4"
            >
              <div className="flex mb-3 items-center">
                <div className="h-14 w-14 rounded-lg bg-amber-300 mr-4">
                  <img
                    className="w-full h-full rounded-lg"
                    src={`src/images/${testimonial.image}.png`}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold">{testimonial.work}</h1>
                  <h2 className="text-neutral-600 text-lg">
                    {testimonial.place}
                  </h2>
                </div>
              </div>
              <div>
                <p className="text-neutral-500 font-normal">
                  {testimonial.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Testimonial;
