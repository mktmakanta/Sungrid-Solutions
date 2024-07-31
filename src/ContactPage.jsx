// src/components/ContactForm.js
import React, { useState } from "react";
import emailjs from "emailjs-com";

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
      <h1 className="text-white text-4xl font-bold">Contact Me</h1>
      <form
        className=" text-teal-500 text-left p-8 pt-2 text-xl"
        onSubmit={handleSubmit}
      >
        <div className="my-4">
          <label className=" font-semibold ">Name:</label>
          <input
            className="text-stone-700 py-4 px-2 w-full rounded-md"
            type="text"
            name="name"
            placeholder="Your Name "
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4">
          <label className=" font-semibold ">Email:</label>
          <input
            className="text-stone-700 py-4 px-2 w-full rounded-md"
            type="email"
            placeholder="Your Email "
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-4">
          <label className=" font-semibold ">Message:</label>
          <textarea
            className="text-stone-700 py-4 px-2 w-full rounded-md"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          className="bg-teal-400 text-white px-8 py-2 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
};

export default ContactPage;
