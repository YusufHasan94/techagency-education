import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='max-w-screen-xl md:mx-auto mx-10 my-40'>
            <div className="text-2xl  text-center text-blue-950 font-semibold">
                <h1>Explore All Available Courses</h1>
            </div>
            <div className='my-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-items-center'>
                {
                    courses.map(course=>(
                        <div key={course._id} className='bg-gray-100 shadow-2xl rounded-xl overflow-hidden pb-5' style={{height: '450px'}}>
                            <div className=' overflow-hidden h-1/2'>
                                <img src={course.image} alt="" className='w-full' />
                            </div>
                            <div className='mx-5 h-1/2'>
                                <div className='my-2 flex justify-between'>
                                    <h1 className='text-sm text-cyan-600 font-semibold bg-cyan-50 p-2 rounded-xl'>{course.tag}</h1>
                                    <h1 className='text-sm font-semibold'>{course.price} $</h1>
                                </div>
                                <div className='md:h-10'>
                                    <h1 className='text-lg text-blue-950 my-2 font-semibold'>{course.title}</h1>
                                </div>
                                <div className='flex items-center gap-5 my-7'>
                                    <div className=''>
                                        <img src={course.instructor.image} className='w-10 h-10 rounded-full' alt="" />
                                    </div>
                                    <h1 className='font-semibold text-md opacity-70'>{course.instructor.name}</h1>
                                </div>
                                <div className='text-right my-2 flex justify-between'>
                                    <Link to={`/preview-course/${course._id}`} className='flex items-center gap-2'> 
                                           <h1 className='text-lg text-cyan-700 font-semibold'>Preview</h1>
                                           <FaArrowRight className='hover:translate-x-1'/> 
                                    </Link>
                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={parseInt(course.ratings.average_rating)}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                }    
            </div>            
        </div>
    );
};

export default Courses;