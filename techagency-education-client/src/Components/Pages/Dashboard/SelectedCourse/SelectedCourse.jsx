import React, { useContext, useEffect, useState } from 'react';
import CommonBanner from '../../../Shared/CommonBanner/CommonBanner';
import { AuthContext } from '../../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa6';

const SelectedCourse = () => {
    const { user } = useContext(AuthContext);
    const [selectedCourse, setSelectedCourse] = useState([]);
    useEffect(() => {
        fetch(`https://techagency-education-server.vercel.app/selected-courses?email=${user.email}`)
            .then(res => res.json())
            .then(data => setSelectedCourse(data))
    }, [])

    console.log(user.email, selectedCourse);

    return (
        <div>
            <CommonBanner title="Selected Course" />
            <div className='max-w-screen-xl md:mx-auto mx-10 my-20'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-10'>
                    {
                        selectedCourse.map(course => (
                            <div key={course._id} className='bg-gray-100 shadow-2xl flex gap-10 rounded-xl overflow-hidden'>
                                <div >
                                    <img src={course?.course?.image} alt="" className='w-44 h-full' />
                                </div>
                                <div className='py-5 pr-5'>
                                    <h1 className='text-xl'>{course?.course?.title}</h1>
                                    <h1 className='text-lg opacity-50'>Instructor: {course?.course?.instructor?.name}</h1>
                                    <h1 className='text-lg opacity-50'>Enrolled Date: {course?.enrolledDate?course.enrolledDate:'Not set'}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default SelectedCourse;