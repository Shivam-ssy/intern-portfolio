import React from "react";
import { useState } from "react";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center my-10 px-10 md:p-0">
        <h1 className="md:text-4xl text-2xl text-black border-3 py-1 px-12 w-fit text-center font-bold">
          CONTACT
        </h1>
        <p className="max-w-3xl text-center my-10">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <div className="my-10">
          <img src="/separatorBlack2.png" alt="" />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-5">
            <input
              type="text"
              name="name"
              placeholder="ENTER YOUR NAME*"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 focus:outline-none uppercase text-sm tracking-wide"
            />

            <input
              type="email"
              name="email"
              placeholder="ENTER YOUR EMAIL*"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 focus:outline-none uppercase text-sm tracking-wide"
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="PHONE NUMBER"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 focus:outline-none uppercase text-sm tracking-wide"
            />

            <textarea
              name="message"
              placeholder="YOUR MESSAGE*"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-b-2 border-l-2 px-5 py-3 border-black pb-2 h-24 focus:outline-none uppercase text-sm tracking-wide resize-none"
            ></textarea>

            <div className="text-center">
              <button
                type="submit"
                className="uppercase tracking-wide text-sm border-l-2 border-r-2 border-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
