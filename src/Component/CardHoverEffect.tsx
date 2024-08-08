'use client'
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";


const CardHoverEffect = () => {
    const feturedWebinars = [
        {
          "title": "Beginner Guitar Lessons",
          "description": "Kickstart your musical journey with our Beginner Guitar Lessons. This course covers the fundamentals of guitar playing, including basic chords, strumming patterns, and simple songs. Whether you aspire to play in a band or strum for fun, these lessons will get you started on the right note.",
          "link": "https://example.com/beginner-guitar-lessons",
          "isFeatured": true
        },
        {
          "title": "Mastering Piano Techniques",
          "description": "Take your piano skills to the next level with our Mastering Piano Techniques course. Designed for intermediate to advanced players, this course delves into complex scales, arpeggios, and performance pieces. Gain the technical proficiency and musicality needed to become a concert-level pianist.",
          "link": "https://example.com/mastering-piano-techniques",
          "isFeatured": true
        },
        {
          "title": "Vocal Training 101",
          "description": "Discover the power of your voice with Vocal Training 101. This course provides professional vocal exercises and techniques to improve pitch, tone, and range. Suitable for all levels, you'll learn how to sing confidently and expressively, making your voice your best instrument.",
          "link": "https://example.com/vocal-training-101",
          "isFeatured": true
        },
        
        {
          "title": "Jazz Improvisation",
          "description": "Unleash your creativity with Jazz Improvisation. This course teaches you the art of improvisation through scales, modes, and rhythmic patterns specific to jazz. Ideal for jazz enthusiasts and musicians looking to add a new dimension to their playing, you'll learn to create spontaneous, soulful music.",
          "link": "https://example.com/jazz-improvisation",
          "isFeatured": true
        },
        
        {
          "title": "Classical Violin Masterclass",
          "description": "Refine your violin skills with our Classical Violin Masterclass. Designed for intermediate to advanced players, this course focuses on advanced techniques, bowing styles, and classical repertoire. Learn from renowned violinists and elevate your playing to professional standards.",
          "link": "https://example.com/classical-violin-masterclass",
          "isFeatured": true
        },
        {
          "title": "Songwriting Essentials",
          "description": "Write compelling songs with Songwriting Essentials. This course guides you through the process of writing lyrics, crafting melodies, and structuring songs. Whether you're a budding songwriter or looking to refine your craft, you'll gain the tools and inspiration to create original music.",
          "link": "https://example.com/songwriting-essentials",
          "isFeatured": false
        }
      ]
      
    return (
        <div className=" p-12 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
                <div className=" text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide">FEATURED WEBINARS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                    Enhance Your Musical Journey
                    </p>
                </div>
                <div className="mt-10  ">
                    <HoverEffect items={feturedWebinars} />
                </div>
                <div className=" mt-10 text-center">
                    <Link href={'/'} className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75">
                    View All Webinars</Link>
                </div>

            </div>
        </div>
    );
};

export default CardHoverEffect;