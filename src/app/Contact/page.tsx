"use client";
import React from "react";
import { Meteors } from "@/Component/ui/meteors";
import { BackgroundBeams } from "@/Component/ui/background-beams";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-900 w-full relative">
      <div className="max-w-2xl flex flex-col items-center text-white mx-auto pt-48 relative z-10">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Us
        </h1>

        <p className="pt-10 flex text-base justify-center text-center text-gray-400">
          We're here to help with any questions about our courses, programs, or
          events. Reach out and let us know how we can assist you in your
          musical journey.
        </p>

        <div className="w-full bg-gradient-to-b mt-5 text-white relative z-10">
          <div className="flex justify-center items-center">
            <form action="" method="" className="flex flex-col w-full md:w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter Your Email"
                className="p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                rows={10}
                placeholder="Enter Your Message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>

              <button className="text-white bg-gradient-to-b from-gray-500 to-gray-700 hover:bg-gradient-to-b hover:from-cyan-500 hover:to-blue-600 px-6 py-3 my-8 mx-auto flex justify-center rounded-md hover:scale-110 duration-300">
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>

      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
    </div>
  );
};

export default Page;
