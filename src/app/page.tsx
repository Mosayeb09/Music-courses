import CardHoverEffect from "@/Component/CardHoverEffect";
import FeaturedCourses from "@/Component/FeaturedCourses";
import HeroSection from "@/Component/HeroSection";
import Instractors from "@/Component/Instractors";
import Instructors from "@/Component/Instructors";
import SticyScrool from "@/Component/SticyScrool";
import TestimonialCards from "@/Component/TestimonialCards";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center    ">
      coffee with code
    </h1>
    <HeroSection></HeroSection>
    <FeaturedCourses></FeaturedCourses>
    <SticyScrool></SticyScrool>
    <TestimonialCards></TestimonialCards>
    <CardHoverEffect></CardHoverEffect>
    <Instructors></Instructors>
    </main>
  );
}
