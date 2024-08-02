'use client'
import CoursesData from '../Data/music_courses.json'
import Link from "next/link";
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
         id: number,
        title: string,
        slug: string,
        description:string ,
        price: number,
        instructor: string,
        isFeatured: boolean,
        
}




const FeaturedCourses = () => {
    const featuredCourse = CoursesData.filter((course:Course) => course.isFeatured)
    return (
        <div className=' py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>

                </div>
            </div>
            <div className='mt-10 '>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center '>

                    {
                        featuredCourse.map((course:Course)=>(
                        <div key={course.id} className='flex justify-center'>
                            <BackgroundGradient 
                            className='flex flex-col rounded[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm '>
                            <div className='max-w-sm flex flex-col flex-grow items-center text-center mx-auto  bg-gradient-to-r from-blue-500 via-purple-700 to-pink-600 p-6 rounded-lg shadow-lg text-white'>
                            <h1 className="text-2xl font-bold mb-2">{course.title}</h1>
                            <p className="text-base mb-4">{course.description}</p>
                            <Link className='px-4 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75' href={`/couses/${course.slug}`}>
                            Learn more
                              
                            </Link>
                                </div>
                            </BackgroundGradient>
                        </div>
                    ))
                        
                    }
                </div>

            </div>
            <div className='mt-20 text-center'>
                <Link href={'/Courses'}
                className='px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75'
                >
                View All Courses
                </Link>

            </div>

        </div>
    );
};

export default FeaturedCourses;