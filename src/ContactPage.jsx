// src/components/ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import Social from "./Social";

const ContactPage = () => {
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
      <div className="p-6 ">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Contact Me
        </h1>
        <div className="w-20 md:w-28 h-1 bg-teal-400 mx-auto mt-2"></div>
      </div>
      <form
        className=" text-teal-500 text-left p-8 pt-2 md:mt-10 text-xl"
        onSubmit={handleSubmit}
      >
        <div className="">
          <label className=" font-bold md:text-3xl ">Name:</label>
          <input
            className="text-stone-800 py-3 mt-1 px-2 w-full rounded-sm focus:outline-none "
            type="text"
            name="name"
            placeholder="Your Name "
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4">
          <label className=" font-bold md:text-3xl ">Email:</label>
          <input
            className="text-stone-800 py-3 px-2 w-full mt-1 rounded-sm focus:outline-none"
            type="email"
            placeholder="Your Email "
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4">
          <label className=" font-bold md:text-3xl">Message:</label>
          <textarea
            className="text-stone-700 py-4 mt-1 px-2 w-full rounded-sm h-56 focus:outline-none"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          className="bg-teal-400 font-medium hover:bg-teal-500 text-2xl  text-white px-10 py-2 rounded-sm md:text-3xl md:px-12 md:py-3"
          type="submit"
        >
          Send
        </button>
      </form>
      <Social />
    </>
  );
};

export default ContactPage;
