import React from "react";
import bgImage from "../assets/images/image2.jpg";
const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 text-white xl:px-0">
        <div className="flex flex-col gap-4 items-center mb-10">
          <h3 className="font-semibold">Contact</h3>
          <h2 className="text-xl font-momo text-heading text-center md:text-3xl xl:text-4xl">
            Reach Out To Us
          </h2>
        </div>
        <div className="flex flex-col justify-center items-start gap-10 md:flex-row">
          <div className="h-full justify-items-start rounded-xl overflow-hidden md:w-full">
            <img src={bgImage} alt="" />
          </div>

          <form
            id="contactForm"
            className="w-full h-full text-white grid grid-cols-1 gap-5 rounded-lg "
          >
            <input
              required
              placeholder="Name"
              className="placeholder:text-lightGrey bg-black/10 outline-none cursor-pointer border-b px-4 py-1"
              type="text"
              name="from_name"
            />
            <input
              required
              placeholder="Email"
              className="placeholder:text-lightGrey cursor-pointer bg-black/10 outline-none border-b px-4 py-1"
              type="email"
              name="from_email"
            />
            <textarea
              name="from_message"
              placeholder="Message"
              rows="5"
              required
              className="placeholder:text-lightGrey cursor-pointer bg-black/10 outline-none border-b px-4 py-1 "
            ></textarea>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="flex justify-center cursor-pointer items-center text-sm text-white font-medium py-2 px-10 rounded-lg border border-white active:scale-95 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
