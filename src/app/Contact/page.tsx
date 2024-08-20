"use client";
import React from "react";
import { Meteors } from "@/Component/ui/meteors";
import { BackgroundBeams } from "@/Component/ui/background-beams";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"



const page = () => {
  return (
    <div className="min-h-screen   bg-gray-900 w-full">
      <div className="max-w-2xl text-white mx-auto  pt-48  ">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>

        <p className=" pt-10 flex text-base justify-center text-center  text-gray-400">
          We`re here to help with any questions about our courses,programs,or
          events.Reach out and let us k=know we can assist you in your musical
          journey.
        </p>

        <Input type="email" placeholder=" Your email address"  className="bg-black  mt-8"/>

        <Textarea placeholder="Type your message here." className=" bg-black mt-4" />


        
      </div>

      <BackgroundBeams className=""></BackgroundBeams>
    </div>
  );
};

export default page;
