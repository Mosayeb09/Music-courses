import CardHoverEffect from "@/Component/CardHoverEffect";
import FeaturedCourses from "@/Component/FeaturedCourses";
import Footer from "@/Component/Footer";
import HeroSection from "@/Component/HeroSection";

import Instructors from "@/Component/Instructors";
import SticyScrool from "@/Component/SticyScrool";
import TestimonialCards from "@/Component/TestimonialCards";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
    <HeroSection></HeroSection>
    <FeaturedCourses></FeaturedCourses>
    <SticyScrool></SticyScrool>
    <TestimonialCards></TestimonialCards>
    <CardHoverEffect></CardHoverEffect>
    <Instructors></Instructors>
    <Footer></Footer>
    </main>
  );
}
