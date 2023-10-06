import { Rating } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TopCourses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/JSON/courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='max-w-screen-xl md:mx-auto mx-5 my-20'>
            <h1 className='text-center text-2xl md:text-4xl text-blue-950 font-semibold uppercase'>Top Rated Learning Tutorials</h1>
            <div className='my-20 grid grid-cols-1 md:grid-cols-4 gap-5'>
                {
                    courses.map(course => (
                        <div key={course.id} className='bg-gray-100 shadow-2xl rounded-xl overflow-hidden'>
                            <div>
                                <img src={course.image} alt="" className='w-full' />
                            </div>
                            <div className='mx-5'>
                                <div className='my-2 flex justify-between'>
                                    <h1 className='text-md text-cyan-600 font-semibold bg-cyan-50 p-2 rounded-xl'>{course.tag}</h1>
                                    <h1 className='text-md font-semibold'>{course.price} $</h1>
                                </div>
                                <div>
                                    <h1 className='text-2xl text-blue-950 my-2 font-semibold'>{course.title}</h1>
                                </div>
                                <div className='flex items-center gap-5 my-5'>
                                    <div className=''>
                                        <img src={course.instructor.image} className='w-16 h-16 rounded-full' alt="" />
                                    </div>
                                    <h1 className='font-semibold text-xl'>{course.instructor.name}</h1>
                                </div>
                                <hr />
                                <div className='text-right my-2'>
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

export default TopCourses;