// src/components/ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xezr4dg",
        "template_vi08yxk",
        formData,
        "t_zPmq5JjO_Q2hUlN"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear form fields
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <>
      <section id="contact" className="p-4 py-10 font-inter md:px-14 lg:px-40">
        <div className="lg:text-center lg:my-10 lg:px-20 ">
          <h1 className="font-bold text-xl text-amber-600 ">
            Want to know more?
          </h1>
          <p className="text-neutral-400 my-4 lg:text-xl">
            If there is anything you'd like to know more about our services, get
            in touch and ask us. We're always happy to answer any questions. You
            can can{" "}
            <a className="text-amber-600 underline underline-offset-4" href="">
              call us{" "}
              <img className="h-3 w-3 inline" src="src/icons/link.svg" alt="" />
            </a>{" "}
            or fill in the form
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 bg-neutral-100 place-content-center lg:p-10 lg:pb-0  ">
          <div className="hidden lg:block">
            <img src="/images/hero-two.png" alt="" />
          </div>
          <form className="  p-4 rounded-md lg:ml-10  " onSubmit={handleSubmit}>
            <div className=" flex flex-col">
              <label className=" text-blue-900 font-bold text-lg  ">Name</label>
              <input
                className="focus:outline-1 outline-amber-500 p-2 mt-1 mb-4"
                type="text"
                name="name"
                placeholder="Your Name "
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col">
              <label className=" text-blue-900 font-bold text-lg   ">
                Email
              </label>
              <input
                className="p-2 mt-1 mb-4 focus:outline-1 outline-amber-500"
                type="email"
                placeholder="Your Email "
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className=" flex flex-col">
              <label className=" text-blue-900 font-bold text-lg  ">
                Message
              </label>
              <textarea
                className="mt-1 p-2 focus:outline-1 outline-amber-500 h-36"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button
              className=" bg-amber-600 rounded-sm text-white font-extralight shadow-lg my-4 text-xl px-6 py-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Form;
