"use client"
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialCards = () => {
    return (
        // <div className="h-[40rem] overflow-hidden w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        //       <h2 className="text-3xl font-bold text-center mb-8 z-10 ">Hear our Harmony: Voices of success</h2>
        //       <div className="flex justify-center w-full   overflow-hidden px-4 sm:px-6 lg:px-8 ">
                      <div className="w-full max-w-6xl ">
                          <InfiniteMovingCards
                             items={musicSchoolTestimonials}
                             direction="right"
                             speed="slow"
                            />

                        </div>
              

                  
        //        </div>
             

        // </div>
    );
};
const musicSchoolTestimonials = [
    {
      "quote": "Learning to play the guitar has been a transformative experience. The Beginner Guitar Lessons course made it easy and fun!",
      "name": "Alex Turner",
      "title": "Beginner Guitar Lessons"
    },
    {
      "quote": "Mastering Piano Techniques helped me reach a level of proficiency I never thought possible. The detailed instruction was invaluable.",
      "name": "Emily Blunt",
      "title": "Mastering Piano Techniques"
    },
    {
      "quote": "Vocal Training 101 gave me the confidence to perform in front of an audience. The exercises and techniques are top-notch.",
      "name": "Chris Martin",
      "title": "Vocal Training 101"
    },
    {
      "quote": "Introduction to Music Theory was a game-changer for me. Understanding the basics of music theory has made me a better musician.",
      "name": "Lindsey Stirling",
      "title": "Introduction to Music Theory"
    },
    {
      "quote": "Jazz Improvisation opened up a whole new world of creativity for me. The course is perfect for anyone looking to explore jazz.",
      "name": "Herbie Hancock",
      "title": "Jazz Improvisation"
    },
    {
      "quote": "Electronic Music Production taught me everything I needed to know about creating my own tracks. The hands-on experience was invaluable.",
      "name": "Deadmau5",
      "title": "Electronic Music Production"
    },
    {
      "quote": "The Classical Violin Masterclass helped me refine my technique and perform with greater confidence. The instructors are exceptional.",
      "name": "Joshua Bell",
      "title": "Classical Violin Masterclass"
    },
    {
      "quote": "Songwriting Essentials provided me with the tools and inspiration I needed to write my own songs. The course was incredibly motivating.",
      "name": "Taylor Swift",
      "title": "Songwriting Essentials"
    }
  ]
  

export default TestimonialCards;


