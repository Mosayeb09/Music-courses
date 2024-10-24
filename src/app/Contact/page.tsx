"use client";
import React from "react";
import { Meteors } from "@/Component/ui/meteors";
import { BackgroundBeams } from "@/Component/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="min-h-screen    bg-gray-900 w-full">
      <div className="max-w-2xl flex flex-col  items-center  text-white mx-auto  pt-48  ">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>

        <p className=" pt-10 flex text-base justify-center text-center  text-gray-400">
          We`re here to help with any questions about our courses,programs,or
          events.Reach out and let us k=know we can assist you in your musical
          journey.
        </p>
        <div className="flex flex-col mt-8  justify-items-center w-full md:w-1/2">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  "
          />
          <input
            type="text"
            name="email"
            placeholder="Enter Your Email"
            className="p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none  "
          />
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Enter Your Message"
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
          ></textarea>

          <button className="text-white bg-gradient-to-b from-cyan-700 to-blue-900 px-6 py-3 my-8 mx-auto flex justify-center rounded-md hover:scale-110 duration-300 ">
            Let's talk
          </button>
        </div>
      </div>

      <BackgroundBeams className=""></BackgroundBeams>
    </div>
  );
};

export default page;
