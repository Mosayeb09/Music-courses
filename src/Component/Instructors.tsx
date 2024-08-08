'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const instructor = [
    {
      "id": 1,
      "name": "John Smith",
      "designation": "Guitar Instructor",
      "image": "https://i.ibb.co/tbfQQJN/y-Kizq2e-Ji-WZVCq-Yvanxzg-Q.jpg"
    },
    {
      "id": 2,
      "name": "Emily Johnson",
      "designation": "Piano Instructor",
      "image": "https://i.ibb.co/JBbXW8t/images.jpg"
    },
    {
      "id": 3,
      "name": "Michael Brown",
      "designation": "Vocal Coach",
      "image": "https://i.ibb.co/0J16mjM/images-1.jpg"
    },
    {
      "id": 4,
      "name": "Sarah Davis",
      "designation": "Music Theory Instructor",
      "image": "https://i.ibb.co/K0WjNPK/images-2.jpg"
    },
    {
      "id": 5,
      "name": "David Wilson",
      "designation": "Jazz Improvisation Expert",
      "image": "https://i.ibb.co/ZNBNYRQ/Hvyx3-DR4-400x400.jpg"
    },
    {
      "id": 6,
      "name": "Jessica Garcia",
      "designation": "Electronic Music Producer",
      "image": "https://i.ibb.co/MS3Ctk6/MV5-BYWEy-OGZj-ZDUt-Nz-Mz-MC00-M2-Jm-LWFj-Ym-Qt-NGM3-MDQ4-Yz-U0-OGZm-Xk-Ey-Xk-Fqc-Gde-QXVy-Mj-Qw-MDg.jpg"
    }
  ]
  



const Instructors = () => {
    return (
        <div className=" relative h-[60rem] overflow-hidden flex items-center justify-center ">
            <WavyBackground className="w-full h-full max-w-7xl mx-auto flex flex-col items-center justify-center ">
                <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Meet Our Instructor</h2>
                <p className="mt-4  text-base md:text-lg text-neutral-200  ">Discover the talented professionals who will guide your musical journey</p>
                <div className=" flex flex-row items-center justify-center mb-5 w-full">
                    <AnimatedTooltip items={instructor}></AnimatedTooltip>

                </div>

            </WavyBackground>
        </div>
    );
};

export default Instructors;