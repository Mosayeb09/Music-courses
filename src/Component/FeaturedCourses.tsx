
import CoursesData from '../Data/music_courses.json'
import Link from "next/link";
const FeaturedCourses = () => {
    return (
        <div className=' py-12 bg-gray-900'>
            <div>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide'>FEATURED COURSES</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>

                </div>
            </div>
            <div></div>
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