"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent =

[
    {
      title: "Beginner Guitar Lessons",
      description: "Kickstart your musical journey with our Beginner Guitar Lessons. This course covers the fundamentals of guitar playing, including basic chords, strumming patterns, and simple songs. Whether you aspire to play in a band or strum for fun, these lessons will get you started on the right note. Our step-by-step approach ensures that even absolute beginners can follow along and see progress quickly. Learn how to tune your guitar, understand musical notation, and start playing your favorite songs in no time."
    },
    {
      title: "Mastering Piano Techniques",
      description: "Take your piano skills to the next level with our Mastering Piano Techniques course. Designed for intermediate to advanced players, this course delves into complex scales, arpeggios, and performance pieces. Gain the technical proficiency and musicality needed to become a concert-level pianist. You'll learn from experienced instructors who will guide you through advanced finger exercises, dynamics, and expression techniques. By the end of the course, you'll be able to tackle challenging compositions and perform with confidence."
    },
    {
      title: "Vocal Training 101",
      description: "Discover the power of your voice with Vocal Training 101. This course provides professional vocal exercises and techniques to improve pitch, tone, and range. Suitable for all levels, you'll learn how to sing confidently and expressively, making your voice your best instrument. Our vocal coaches will help you develop proper breathing techniques, vocal warm-ups, and exercises to strengthen your vocal cords. You'll also learn about stage presence and performance skills to captivate your audience."
    },
    {
      title: "Introduction to Music Theory",
      description: "Unlock the language of music with our Introduction to Music Theory course. Explore the building blocks of music, including scales, chords, rhythm, and notation. This foundational knowledge is essential for any musician looking to deepen their understanding and improve their playing or composing skills. Our comprehensive curriculum covers everything from basic note reading to complex harmonic analysis. You'll gain a deeper appreciation for music and the ability to create your own compositions with confidence."
    },
    {
      title: "Jazz Improvisation",
      description: "Unleash your creativity with Jazz Improvisation. This course teaches you the art of improvisation through scales, modes, and rhythmic patterns specific to jazz. Ideal for jazz enthusiasts and musicians looking to add a new dimension to their playing, you'll learn to create spontaneous, soulful music. Our expert instructors will guide you through the principles of jazz theory, including chord progressions and soloing techniques. You'll also have the opportunity to jam with other musicians and apply what you've learned in real-time."
    },
    {
      title: "Electronic Music Production",
      description: "Produce your own beats and tracks with Electronic Music Production. Learn to use industry-standard software to create, mix, and master electronic music. This comprehensive course covers everything from basic beat-making to advanced production techniques, perfect for aspiring producers and DJs. You'll explore sound design, sampling, and effects processing, and gain hands-on experience with digital audio workstations (DAWs). By the end of the course, you'll have a portfolio of original tracks and the skills to pursue a career in music production."
    },
    {
      title: "Classical Violin Masterclass",
      description: "Refine your violin skills with our Classical Violin Masterclass. Designed for intermediate to advanced players, this course focuses on advanced techniques, bowing styles, and classical repertoire. Learn from renowned violinists and elevate your playing to professional standards. Our curriculum includes detailed instruction on vibrato, shifting, and complex bowing techniques. You'll also study and perform works by composers such as Bach, Mozart, and Beethoven, enhancing both your technical skills and musical interpretation."
    },
    {
      title: "Songwriting Essentials",
      description: "Write compelling songs with Songwriting Essentials. This course guides you through the process of writing lyrics, crafting melodies, and structuring songs. Whether you're a budding songwriter or looking to refine your craft, you'll gain the tools and inspiration to create original music. Our experienced songwriters will teach you how to develop catchy hooks, meaningful lyrics, and memorable melodies. You'll also learn about song arrangement and production, giving you a comprehensive understanding of the songwriting process from start to finish."
    }
  ]
  

const SticyScrool = () => {
    return (
        <div  >
            <StickyScroll content={musicSchoolContent}></StickyScroll>
        </div>
    );
};

export default SticyScrool;