'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";
const instructor = [
    {
      "id": 1,
      "name": "John Smith",
      "designation": "Guitar Instructor",
      "image": "https://cdns-images.dzcdn.net/images/artist/086f50bb1ce0e3033634e5e9c2d75462/1900x1900-000000-80-0-0.jpg"
    },
    {
      "id": 2,
      "name": "Emily Johnson",
      "designation": "Piano Instructor",
      "image": "https://i1.sndcdn.com/avatars-000117299196-gsyfij-t500x500.jpg"
    },
    {
      "id": 3,
      "name": "Michael Brown",
      "designation": "Vocal Coach",
      "image": "https://choirlife.com/wp-content/uploads/2018/05/michael-brown-headshot.jpg?w=261&h=261"
    },
    {
      "id": 4,
      "name": "Sarah Davis",
      "designation": "Music Theory Instructor",
      "image": "https://static.wikia.nocookie.net/gaylepedia/images/d/d5/Sara_Davis.jpg/revision/latest?cb=20220328232623"
    },
    {
      "id": 5,
      "name": "David Wilson",
      "designation": "Jazz Improvisation Expert",
      "image": "https://pbs.twimg.com/profile_images/1630338491664957441/Hvyx3DR4_400x400.jpg"
    },
    {
      "id": 6,
      "name": "Jessica Garcia",
      "designation": "Electronic Music Producer",
      "image": "https://m.media-amazon.com/images/M/MV5BYWEyOGZjZDUtNzMzMC00M2JmLWFjYmQtNGM3MDQ4YzU0OGZmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg"
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